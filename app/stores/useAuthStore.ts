interface User {
	id: string;
	name: string;
	email: string;
	picture: string;
}

export const useAuthStore = defineStore("auth", {
	state: () => ({
		user: null as User | null,
		isAuthenticated: false,
	}),

	actions: {
		async logout() {
			try {
				// Call server logout endpoint
				await $fetch("/api/logout", {
					method: "POST",
				});

				// Clear local state
				this.user = null;
				this.isAuthenticated = false;
			} catch (error) {
				console.error("Logout error:", error);
				// Still clear local state even if server call fails
				this.user = null;
				this.isAuthenticated = false;
			}
		},

		initializeAuth() {
			if (process.client) {
				// Check for user cookie set by server
				const userCookie = useCookie("gamuda-user");
				if (userCookie.value) {
					try {
						const userData = typeof userCookie.value === "string" ? JSON.parse(userCookie.value) : userCookie.value;

						this.user = {
							id: userData.id,
							name: userData.name,
							email: userData.email,
							picture: userData.picture,
						};
						this.isAuthenticated = true;
					} catch (error) {
						console.error("Error parsing user cookie:", error);
					}
				}
			}
		},
	},
});
