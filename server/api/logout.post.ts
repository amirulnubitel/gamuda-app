export default defineEventHandler(async (event) => {
	try {
		// Clear authentication cookies
		deleteCookie(event, "gamuda-auth-token", {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
		});

		deleteCookie(event, "gamuda-user", {
			httpOnly: false,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
		});

		return {
			status: "success",
			message: "Logged out successfully",
		};
	} catch (error) {
		console.error("Logout error:", error);
		throw createError({
			statusCode: 500,
			statusMessage: "Failed to logout",
		});
	}
});
