<template>
	<div class="min-h-screen bg-gray-50">
		<!-- Navigation Header -->
		<nav class="bg-white shadow-sm border-b border-gray-200">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between items-center h-16">
					<!-- Logo and Brand -->
					<!-- <div class="text-center">
						<div class="mx-auto h-20 w-20 rounded-xl flex items-center justify-center mb-6">
							<img src="assets/img/image.png" alt="Gamuda Logo" class="h-12 w-12" />
						</div>
						<h2 class="text-3xl font-bold text-gray-900 mb-2">Welcome to Gamuda Berhad</h2>
						<p class="text-gray-600">Sign in to access your dashboard</p>
					</div> -->

					<!-- User Info -->
					<div class="flex items-center space-x-4">
						<div class="flex items-center space-x-3">
							<img v-if="authStore.user?.picture" :src="authStore.user.picture" :alt="authStore.user.name" class="h-8 w-8 rounded-full" />
							<div class="hidden md:block">
								<p class="text-sm font-medium text-gray-900">{{ authStore.user?.name }}</p>
								<p class="text-xs text-gray-500">{{ authStore.user?.email }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>

		<!-- Main Content -->
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<!-- Tab Navigation -->
			<div class="mb-8">
				<nav class="flex space-x-8 border-b border-gray-200">
					<button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="['py-2 px-1 border-b-2 font-medium text-sm', activeTab === tab.id ? 'border-gamuda-500 text-gamuda-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']">
						<div class="flex items-center">
							<component :is="tab.icon" class="h-5 w-5 mr-2" />
							{{ tab.name }}
						</div>
					</button>
				</nav>
			</div>

			<!-- Tab Content -->
			<div class="bg-white rounded-lg shadow-sm">
				<!-- Analytics Tab -->
				<div v-if="activeTab === 'analytics'" class="p-6">
					<h2 class="text-2xl font-bold text-gray-900 mb-6">Project Analytics</h2>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<!-- Pie Chart -->
						<div class="bg-gray-50 rounded-lg p-6">
							<h3 class="text-lg font-semibold text-gray-900 mb-4">Project Distribution</h3>
							<div class="h-64 flex items-center justify-center">
								<PieChart />
							</div>
						</div>

						<!-- Stats Cards -->
						<div class="space-y-4">
							<div class="bg-gamuda-50 rounded-lg p-6">
								<div class="flex items-center">
									<div class="p-2 bg-gamuda-100 rounded-lg">
										<svg class="h-6 w-6 text-gamuda-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
										</svg>
									</div>
									<div class="ml-4">
										<p class="text-sm font-medium text-gamuda-600">Active Projects</p>
										<p class="text-2xl font-bold text-gamuda-900">12</p>
									</div>
								</div>
							</div>

							<div class="bg-gamuda-orange-50 rounded-lg p-6">
								<div class="flex items-center">
									<div class="p-2 bg-gamuda-orange-100 rounded-lg">
										<svg class="h-6 w-6 text-gamuda-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											></path>
										</svg>
									</div>
									<div class="ml-4">
										<p class="text-sm font-medium text-gamuda-orange-600">Completed</p>
										<p class="text-2xl font-bold text-gamuda-orange-900">8</p>
									</div>
								</div>
							</div>

							<div class="bg-green-50 rounded-lg p-6">
								<div class="flex items-center">
									<div class="p-2 bg-green-100 rounded-lg">
										<svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
										</svg>
									</div>
									<div class="ml-4">
										<p class="text-sm font-medium text-green-600">Revenue</p>
										<p class="text-2xl font-bold text-green-900">RM 2.5M</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Profile Tab -->
				<div v-if="activeTab === 'profile'" class="p-6">
					<h2 class="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
					<div class="max-w-2xl">
						<div class="bg-gradient-to-r from-gamuda-500 to-gamuda-600 rounded-lg p-6 mb-6">
							<div class="flex items-center space-x-4">
								<img v-if="authStore.user?.picture" :src="authStore.user.picture" :alt="authStore.user.name" class="h-20 w-20 rounded-full border-4 border-white" />
								<div class="text-white">
									<h3 class="text-xl font-bold">{{ authStore.user?.name }}</h3>
									<p class="text-gamuda-100">{{ authStore.user?.email }}</p>
									<p class="text-sm text-gamuda-200 mt-1">Gamuda Employee</p>
								</div>
							</div>
						</div>

						<div class="space-y-6">
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div class="bg-gray-50 rounded-lg p-4">
									<label class="block text-sm font-medium text-gray-700 mb-1">User ID</label>
									<p class="text-gray-900">{{ authStore.user?.id }}</p>
								</div>
								<div class="bg-gray-50 rounded-lg p-4">
									<label class="block text-sm font-medium text-gray-700 mb-1">Department</label>
									<p class="text-gray-900">Engineering</p>
								</div>
								<div class="bg-gray-50 rounded-lg p-4">
									<label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
									<p class="text-gray-900">Kuala Lumpur, Malaysia</p>
								</div>
								<div class="bg-gray-50 rounded-lg p-4">
									<label class="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
									<p class="text-gray-900">January 2024</p>
								</div>
							</div>

							<div class="bg-gamuda-50 rounded-lg p-4 border border-gamuda-200">
								<h4 class="font-medium text-gamuda-900 mb-2">Account Status</h4>
								<div class="flex items-center">
									<div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
									<span class="text-sm text-gray-700">Active and verified</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Logout Tab -->
				<div v-if="activeTab === 'logout'" class="p-6">
					<h2 class="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
					<div class="max-w-2xl">
						<div class="bg-red-50 border border-red-200 rounded-lg p-6">
							<div class="flex items-start">
								<div class="p-2 bg-red-100 rounded-lg mr-4">
									<svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
									</svg>
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-medium text-red-900 mb-2">Sign Out</h3>
									<p class="text-sm text-red-700 mb-4">You will be signed out of your Gamuda account and redirected to the login page. Any unsaved work will be lost.</p>
									<button @click="handleLogout" :disabled="isLoggingOut" class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
										<span v-if="!isLoggingOut">Sign Out</span>
										<span v-else class="flex items-center">
											<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
											Signing out...
										</span>
									</button>
								</div>
							</div>
						</div>

						<div class="mt-6 bg-gray-50 rounded-lg p-4">
							<h4 class="font-medium text-gray-900 mb-2">Session Information</h4>
							<div class="text-sm text-gray-600 space-y-1">
								<p>Signed in as: {{ authStore.user?.email }}</p>
								<p>Last activity: {{ new Date().toLocaleString() }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
// Auth middleware - redirect if not authenticated
definePageMeta({
	middleware: "auth",
});

const authStore = useAuthStore();
const router = useRouter();

const activeTab = ref("analytics");
const isLoggingOut = ref(false);

// Tab configuration
const tabs = [
	{
		id: "analytics",
		name: "Analytics",
		icon: "ChartPieIcon",
	},
	{
		id: "profile",
		name: "Profile",
		icon: "UserIcon",
	},
	{
		id: "logout",
		name: "Settings",
		icon: "CogIcon",
	},
];

// Icon components (simplified SVG)
const ChartPieIcon = {
	template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>`,
};

const UserIcon = {
	template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>`,
};

const CogIcon = {
	template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
};

onMounted(() => {
	// Initialize auth store
	authStore.initializeAuth();

	// If not authenticated, redirect to login
	if (!authStore.isAuthenticated) {
		router.push("/");
	}
});

const handleLogout = async () => {
	try {
		isLoggingOut.value = true;

		// Call the store logout method (which will call the server)
		await authStore.logout();

		// Wait a moment for UI feedback
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Redirect to login page
		await router.push("/");
	} catch (error) {
		console.error("Logout failed:", error);
		// Even if logout fails, redirect to login page
		await router.push("/");
	} finally {
		isLoggingOut.value = false;
	}
};
</script>
