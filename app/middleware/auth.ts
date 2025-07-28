export default defineNuxtRouteMiddleware((to) => {
	// Skip middleware during server-side rendering
	if (process.server) return;

	const authStore = useAuthStore();

	// Initialize auth store if not already done
	authStore.initializeAuth();

	// If not authenticated, redirect to login
	if (!authStore.isAuthenticated) {
		return navigateTo("/");
	}
});
