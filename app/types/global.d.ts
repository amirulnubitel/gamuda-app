// Google Sign-In types
interface GoogleUser {
	credential: string;
	select_by: string;
}

interface GoogleAuth {
	accounts: {
		id: {
			initialize: (config: any) => void;
			prompt: () => void;
			renderButton: (element: HTMLElement, config: any) => void;
		};
	};
}

declare global {
	interface Window {
		google: GoogleAuth;
	}
}

// User interface for the application
export interface User {
	id: string;
	name: string;
	email: string;
	picture?: string;
}

// Chart data interface for PieChart component
export interface ChartData {
	label: string;
	value: number;
	color: string;
}

export {};
