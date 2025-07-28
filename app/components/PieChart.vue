<template>
	<div class="relative">
		<canvas ref="chartCanvas" width="300" height="300"></canvas>
	</div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

const chartCanvas = ref(null);
let chartInstance = null;

const chartData = {
	labels: ["Infrastructure", "Property Development", "Water Management", "Tunneling", "Highway Projects"],
	datasets: [
		{
			data: [30, 25, 20, 15, 10],
			backgroundColor: [
				"#0ea5e9", // gamuda-500
				"#f97316", // gamuda-orange-500
				"#10b981", // green-500
				"#8b5cf6", // violet-500
				"#f59e0b", // amber-500
			],
			borderColor: [
				"#0284c7", // gamuda-600
				"#ea580c", // gamuda-orange-600
				"#059669", // green-600
				"#7c3aed", // violet-600
				"#d97706", // amber-600
			],
			borderWidth: 2,
			hoverOffset: 4,
		},
	],
};

const chartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: "bottom",
			labels: {
				usePointStyle: true,
				padding: 20,
				font: {
					size: 12,
					family: "Inter",
				},
			},
		},
		tooltip: {
			backgroundColor: "rgba(0, 0, 0, 0.8)",
			titleColor: "#fff",
			bodyColor: "#fff",
			borderColor: "#0ea5e9",
			borderWidth: 1,
			cornerRadius: 8,
			displayColors: true,
			callbacks: {
				label: function (context) {
					const label = context.label || "";
					const value = context.parsed;
					const total = context.dataset.data.reduce((a, b) => a + b, 0);
					const percentage = ((value / total) * 100).toFixed(1);
					return `${label}: ${percentage}%`;
				},
			},
		},
	},
	animation: {
		animateRotate: true,
		animateScale: true,
		duration: 1000,
		easing: "easeOutQuart",
	},
};

onMounted(async () => {
	await nextTick();

	if (chartCanvas.value) {
		const ctx = chartCanvas.value.getContext("2d");

		chartInstance = new Chart(ctx, {
			type: "pie",
			data: chartData,
			options: chartOptions,
		});
	}
});

onUnmounted(() => {
	if (chartInstance) {
		chartInstance.destroy();
	}
});
</script>
