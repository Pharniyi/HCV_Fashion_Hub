/** @type {import('tailwindcss').Config} */
export default {
    content:[
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode:"class",
    theme: {
        extend:{
            colors:{
                primary: "#1D4ED8",
                secondary: "#9333EA",
            },
            container:{
                center:true,
                padding:{
                    DEFAULT:"1rem",
                    sm:"3rem",
                }
            }
        },
    },
    plugins:[],
}