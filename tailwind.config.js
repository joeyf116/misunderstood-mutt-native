/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"mm-cream": "#f8ead8",
				"mm-green": "#9d933d",
				"mm-red": "#ef4723",
				"mm-dark-pink": "#f0a7ca",
				"mm-orange": "#f38c20",
				"mm-light-blue": "#c7d7cc",
				"mm-yellow": "#f9e27c",
				"mm-light-pink": "#fdb9e8",
				"mm-dark-blue": "#45548d",
			},
		},
	},
	plugins: [],
};
