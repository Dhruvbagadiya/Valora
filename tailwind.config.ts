import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5389FF',
                secondary: '#2D2D2D',

                // // ? Light Theme
                // // light: '#F9FAFB',
                // light: '#dcdcdc',
                // lightText: '#1F2937',
                
                // // ? Dark Theme
                // dark: '#1F2937',
                // darkText: '#F9FAFB',
                // // dark: '#171713',

                dark: '#1F2937', 
                darkText: '#E5E5E5',
                darklightbg: '#272727',
                darklightText: '#C4C4C4',


                light: '#FFFFFF',
                lightText: '#2D2D2D',
                lightdarkbg: '#F9FAFB',
                lightdarkText: '#2D2D2D',
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
