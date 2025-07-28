/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/components/**/*.{js,vue,ts}", "./app/layouts/**/*.vue", "./app/pages/**/*.vue", "./app/plugins/**/*.{js,ts}", "./app/composables/**/*.{js,ts}", "./app/utils/**/*.{js,ts}", "./app/app.vue", "./app/error.vue"],
	theme: {
		extend: {
			colors: {
				// Gamuda Primary Red - Main brand color
				gamuda: {
					50: "#fef2f2",
					100: "#fee2e2",
					200: "#fecaca",
					300: "#fca5a5",
					400: "#f87171",
					500: "#dc2626", // Primary Gamuda Red
					600: "#b91c1c",
					700: "#991b1b",
					800: "#7f1d1d",
					900: "#651b1b",
					950: "#450a0a",
				},
				// Gamuda Secondary Blue - Corporate/Professional
				"gamuda-blue": {
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#1d4ed8", // Professional Blue
					600: "#1e40af",
					700: "#1e3a8a",
					800: "#1e3a8a",
					900: "#1e293b",
					950: "#0f172a",
				},
				// Gamuda Green - Sustainability/Growth
				"gamuda-green": {
					50: "#f0fdf4",
					100: "#dcfce7",
					200: "#bbf7d0",
					300: "#86efac",
					400: "#4ade80",
					500: "#16a34a", // Sustainability Green
					600: "#15803d",
					700: "#166534",
					800: "#14532d",
					900: "#14532d",
					950: "#052e16",
				},
				// Gamuda Orange - Energy/Innovation
				"gamuda-orange": {
					50: "#fff7ed",
					100: "#ffedd5",
					200: "#fed7aa",
					300: "#fdba74",
					400: "#fb923c",
					500: "#f97316", // Innovation Orange
					600: "#ea580c",
					700: "#c2410c",
					800: "#9a3412",
					900: "#7c2d12",
					950: "#431407",
				},
				// Gamuda Gray - Neutral/Infrastructure
				"gamuda-gray": {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280", // Professional Gray
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827",
					950: "#030712",
				},
				// Gamuda Gold - Premium/Excellence
				"gamuda-gold": {
					50: "#fffbeb",
					100: "#fef3c7",
					200: "#fde68a",
					300: "#fcd34d",
					400: "#fbbf24",
					500: "#d97706", // Premium Gold
					600: "#b45309",
					700: "#92400e",
					800: "#78350f",
					900: "#451a03",
					950: "#451a03",
				},
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
