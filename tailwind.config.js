module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			gray: '#535758',
			green: '#4B9C8D',
			white: '#fff'
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
