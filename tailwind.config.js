/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
            },
            boxShadow: {
                'nav-popup': '0px 4px 30px rgba(0, 87, 45, 0.15)',
            },
            maxHeight: {
                'items-cart-header': 'calc(50vh - 138px)',
            },
            width: {
                'item-prod-home-ssm': 'calc((100vw - 16px)/2)!important',
                'item-prod-home-sm': 'calc((100vw - 16px)/3)!important',
            },
            backgroundImage: {
                banner: "url('../public/images/bg-banner.jpg')",
            },
        },
    },
    plugins: [],
};
