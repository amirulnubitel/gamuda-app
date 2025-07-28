<template>
	<NuxtPage />
</template>

<script setup>
// Initialize the auth store on app startup
const authStore = useAuthStore();

onMounted(() => {
	authStore.initializeAuth();
});
</script>
