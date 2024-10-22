/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5389FF',
                secondary: '#171713'
                // primary: '#FFC83A',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}