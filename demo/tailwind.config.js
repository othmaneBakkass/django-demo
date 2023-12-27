/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./polls/templates/**/*.html",
		"./polls/static/**/*.css",
		"./polls/static/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
