export default defineEventHandler(async (event) => {
	try {
		const query = getQuery(event);
		const code = query.code as string;
		const error = query.error as string;

		if (error) {
			throw createError({
				statusCode: 400,
				statusMessage: `OAuth error: ${error}`,
			});
		}

		if (!code) {
			throw createError({
				statusCode: 400,
				statusMessage: "Missing authorization code",
			});
		}

		const config = useRuntimeConfig();

		// Exchange authorization code for tokens
		const tokenResponse = await $fetch<{
			access_token?: string;
			expires_in?: number;
		}>("https://oauth2.googleapis.com/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				client_id: config.GOOGLE_CLIENT_ID,
				client_secret: config.GOOGLE_CLIENT_SECRET,
				redirect_uri: config.GOOGLE_REDIRECT_URI,
				grant_type: "authorization_code",
				code: code,
			}).toString(),
		});

		if (!tokenResponse.access_token) {
			throw createError({
				statusCode: 400,
				statusMessage: "Failed to obtain access token",
			});
		}

		// Get user info using access token
		const userInfo = await $fetch<{
			id: string;
			email: string;
			name: string;
			picture: string;
			verified_email: boolean;
		}>("https://www.googleapis.com/oauth2/v2/userinfo", {
			headers: {
				Authorization: `Bearer ${tokenResponse.access_token}`,
			},
		});

		// Set secure cookies
		setCookie(event, "gamuda-access-token", tokenResponse.access_token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: tokenResponse.expires_in || 3600,
		});

		setCookie(
			event,
			"gamuda-user",
			JSON.stringify({
				id: userInfo.id,
				email: userInfo.email,
				name: userInfo.name,
				picture: userInfo.picture,
				verified_email: userInfo.verified_email,
			}),
			{
				httpOnly: false,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				maxAge: tokenResponse.expires_in || 3600,
			}
		);

		// Redirect to dashboard with success
		return sendRedirect(event, "/dashboard?auth=success");
	} catch (error) {
		console.error("OAuth callback error:", error);

		// Redirect to login with error
		const errorMessage = encodeURIComponent((error as any)?.statusMessage || "Authentication failed");
		return sendRedirect(event, `/?error=${errorMessage}`);
	}
});
