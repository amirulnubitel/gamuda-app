// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Gamuda Berhad",
			meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "description", content: "Gamuda Berhad Application" }],
		},
	},
	devtools: { enabled: true },
	modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
	css: ["~/assets/css/main.css"],
	runtimeConfig: {
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
		public: {
			GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
			GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
		},
	},
});
