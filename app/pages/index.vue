<template>
	<div class="min-h-screen bg-gradient-to-br from-gamuda-50 to-gamuda-100 flex items-center justify-center px-4">
		<div class="max-w-md w-full space-y-8">
			<!-- Logo and Header -->
			<div class="text-center">
				<div class="mx-auto h-20 w-20 rounded-xl flex items-center justify-center mb-6">
					<img src="assets/img/image.png" alt="Gamuda Logo" class="h-20 w-20" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-2">Welcome to Gamuda Berhad</h2>
				<p class="text-gray-600">Sign in to access your dashboard</p>
			</div>

			<!-- Login Card -->
			<div class="bg-white rounded-2xl shadow-xl p-8 space-y-6">
				<!-- Gamuda Branding -->
				<div class="text-center">
					<h3 class="text-xl font-semibold text-gamuda-700 mb-2">Gamuda Berhad</h3>
					<p class="text-sm text-gray-500">Engineering Excellence</p>
				</div>

				<!-- Google Sign In Button -->
				<div class="space-y-4">
					<!-- OAuth2 Google Sign-In Button -->
					<button
						@click="handleGoogleSignIn"
						:disabled="isLoading"
						class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gamuda-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						<svg v-if="!isLoading" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
							<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
							<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
							<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
							<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
						</svg>
						<div v-else class="w-5 h-5 mr-3 border-2 border-gamuda-600 border-t-transparent rounded-full animate-spin"></div>
						{{ isLoading ? "Redirecting..." : "Sign in with Google" }}
					</button>

					<!-- Error message -->
					<div v-if="errorMessage" class="p-3 bg-red-50 border border-red-200 rounded-lg">
						<div class="flex items-start">
							<svg class="w-5 h-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
							</svg>
							<p class="text-sm text-red-600">{{ errorMessage }}</p>
						</div>
					</div>

					<!-- Success message -->
					<div v-if="successMessage" class="p-3 bg-green-50 border border-green-200 rounded-lg">
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<p class="text-sm text-green-600">{{ successMessage }}</p>
						</div>
					</div>
				</div>

				<!-- Features -->
				<div class="pt-6 border-t border-gray-200">
					<div class="grid grid-cols-1 gap-4 text-sm text-gray-600">
						<div class="flex items-center">
							<div class="w-2 h-2 bg-gamuda-500 rounded-full mr-3"></div>
							<span>Dashboard Analytics</span>
						</div>
						<div class="flex items-center">
							<div class="w-2 h-2 bg-gamuda-orange-500 rounded-full mr-3"></div>
							<span>Profile Management</span>
						</div>
						<div class="flex items-center">
							<div class="w-2 h-2 bg-gamuda-600 rounded-full mr-3"></div>
							<span>Secure Access</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Footer -->
			<div class="text-center text-sm text-gray-500">
				<p>&copy; 2025 Gamuda Berhad. All rights reserved.</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const authStore = useAuthStore();
const router = useRouter();
const isLoading = ref(false);
const errorMessage = ref("");
const successMessage = ref("");

// Check for error or success in URL
const route = useRoute();
if (route.query.error) {
	errorMessage.value = decodeURIComponent(String(route.query.error));
}

// Initialize auth store
onMounted(() => {
	authStore.initializeAuth();

	// If already authenticated, redirect to dashboard
	if (authStore.isAuthenticated) {
		router.push("/dashboard");
	}
});

const showMessage = (message, type = "error") => {
	if (type === "error") {
		errorMessage.value = message;
		successMessage.value = "";
	} else {
		successMessage.value = message;
		errorMessage.value = "";
	}

	// Clear message after 5 seconds
	setTimeout(() => {
		errorMessage.value = "";
		successMessage.value = "";
	}, 5000);
};

const handleGoogleSignIn = () => {
	try {
		isLoading.value = true;
		showMessage("Redirecting to Google...", "success");

		const config = useRuntimeConfig();
		const base = "https://accounts.google.com/o/oauth2/v2/auth";
		const params = new URLSearchParams({
			client_id: config.public.GOOGLE_CLIENT_ID,
			redirect_uri: config.public.GOOGLE_REDIRECT_URI,
			response_type: "code",
			scope: "openid email profile",
			prompt: "select_account",
		});

		// Redirect to Google OAuth
		window.location.href = `${base}?${params.toString()}`;
	} catch (error) {
		console.error("OAuth redirect failed:", error);
		showMessage("Failed to redirect to Google. Please try again.", "error");
		isLoading.value = false;
	}
};
</script>
