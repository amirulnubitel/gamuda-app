<!-- pages/auth/callback.vue -->
<template>
	<div class="p-4">Logging in...</div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

onMounted(async () => {
	const code = route.query.code;
	if (code) {
		const res = await $fetch("/api/auth/google/callback", {
			method: "GET",
			query: { code },
		});

		console.log("User info:", res);

		// Store to Pinia/session if needed
		router.push("/");
	}
});
</script>
