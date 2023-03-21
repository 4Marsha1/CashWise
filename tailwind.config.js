/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                'midnight': {
                    100: '#163562',
                    200: '#1161D60D',
                    300: '#00204E'
                },
                'grey': '#F5F5F5',
                'blue': '#1161D6',
                'gray': '#767676'
            },
        },
    },
    plugins: [],
}