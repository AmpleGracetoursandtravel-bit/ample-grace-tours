/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/*.{html,js}",
        "./index.html",
        "./components/**/*.{html,js}",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            // Pearl of Africa Palette - Color System
            colors: {
                // Primary Colors - Deep forest green (Uganda's natural foundation)
                primary: {
                    DEFAULT: "#2D5016", // green-800 equivalent
                    dark: "#1F3810", // darker forest green
                    light: "#3D6B1F", // lighter forest green
                },
                // Secondary Colors - Rich earth brown (grounding and warmth)
                secondary: {
                    DEFAULT: "#8B4513", // saddle-brown
                    dark: "#6B340F", // darker earth brown
                    light: "#A0522D", // sienna
                },
                // Accent Colors - Golden rod (African sunlight moments)
                accent: {
                    DEFAULT: "#DAA520", // goldenrod
                    dark: "#B8860B", // dark-goldenrod
                    light: "#F0E68C", // khaki
                },
                // Background Colors
                background: "#FEFEFE", // pure canvas
                surface: {
                    DEFAULT: "#F8F6F3", // warm neutral
                    hover: "#F0EDE8", // surface hover state
                },
                // Text Colors
                text: {
                    primary: "#1A1A1A", // gray-900 equivalent
                    secondary: "#666666", // gray-600 equivalent
                    tertiary: "#999999", // gray-500 equivalent
                },
                // Feedback Colors
                success: {
                    DEFAULT: "#228B22", // forest-green
                    light: "#90EE90", // light-green
                },
                warning: {
                    DEFAULT: "#FF8C00", // dark-orange
                    light: "#FFD700", // gold
                },
                error: {
                    DEFAULT: "#CD5C5C", // indian-red
                    light: "#F08080", // light-coral
                },
                // Border Colors
                border: {
                    DEFAULT: "#E5E5E5", // gray-200 equivalent
                    focus: "#2D5016", // primary green
                },
            },

            // Typography - Font Families
            fontFamily: {
                headline: ['Playfair Display', 'serif'], // Elegant serif for headlines
                body: ['Source Sans Pro', 'sans-serif'], // Readable sans-serif for body
                cta: ['Montserrat', 'sans-serif'], // Confident sans-serif for CTAs
                accent: ['Crimson Text', 'serif'], // Sophisticated serif for accents
            },

            // Font Weights
            fontWeight: {
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },

            // Spacing Scale - Generous white space
            spacing: {
                'xs': '0.5rem',
                'sm': '1rem',
                'md': '1.5rem',
                'lg': '2rem',
                'xl': '3rem',
                '2xl': '4rem',
                '3xl': '6rem',
                '4xl': '8rem',
                '5xl': '10rem',
            },

            // Border Radius - Minimal approach
            borderRadius: {
                'sm': '4px',
                'base': '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                'full': '9999px',
            },

            // Box Shadow - Subtle depth for elevated surfaces
            boxShadow: {
                'sm': '0 1px 3px rgba(0, 0, 0, 0.04)',
                'base': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'md': '0 6px 24px rgba(0, 0, 0, 0.10)',
                'lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
                'interactive': '0 8px 30px rgba(45, 80, 22, 0.15)',
                'none': 'none',
            },

            // Animation & Transitions - Natural breathing motion
            transitionDuration: {
                'fast': '300ms',
                'base': '400ms',
                'slow': '600ms',
            },

            transitionTimingFunction: {
                'graceful': 'cubic-bezier(0.4, 0, 0.2, 1)',
                'gentle': 'ease-out',
            },

            // Container Sizes
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '1.5rem',
                    lg: '2rem',
                    xl: '2.5rem',
                    '2xl': '3rem',
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1400px',
                },
            },

            // Typography Scale
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1.5' }],
                'sm': ['0.875rem', { lineHeight: '1.6' }],
                'base': ['1rem', { lineHeight: '1.7' }],
                'lg': ['1.125rem', { lineHeight: '1.7' }],
                'xl': ['1.25rem', { lineHeight: '1.6' }],
                '2xl': ['1.5rem', { lineHeight: '1.5' }],
                '3xl': ['1.875rem', { lineHeight: '1.4' }],
                '4xl': ['2.25rem', { lineHeight: '1.3' }],
                '5xl': ['3rem', { lineHeight: '1.2' }],
                '6xl': ['3.75rem', { lineHeight: '1.1' }],
                '7xl': ['4.5rem', { lineHeight: '1.1' }],
            },

            // Letter Spacing
            letterSpacing: {
                tighter: '-0.02em',
                tight: '-0.01em',
                normal: '0',
                wide: '0.01em',
                wider: '0.02em',
                widest: '0.03em',
            },

            // Z-Index Scale
            zIndex: {
                '0': '0',
                '10': '10',
                '20': '20',
                '30': '30',
                '40': '40',
                '50': '50',
                'dropdown': '100',
                'modal': '200',
                'popover': '300',
                'tooltip': '400',
            },

            // Aspect Ratios
            aspectRatio: {
                'hero': '16 / 9',
                'card': '4 / 3',
                'portrait': '3 / 4',
                'square': '1 / 1',
            },

            // Backdrop Blur
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                base: '8px',
                md: '12px',
                lg: '16px',
            },

            // Opacity Scale
            opacity: {
                '0': '0',
                '5': '0.05',
                '10': '0.1',
                '20': '0.2',
                '30': '0.3',
                '40': '0.4',
                '50': '0.5',
                '60': '0.6',
                '70': '0.7',
                '80': '0.8',
                '90': '0.9',
                '95': '0.95',
                '100': '1',
            },

            // Animation Keyframes
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'scale-in': {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },

            animation: {
                'fade-in': 'fade-in 600ms ease-out',
                'fade-up': 'fade-up 600ms ease-out',
                'scale-in': 'scale-in 400ms ease-out',
                'slide-in-right': 'slide-in-right 400ms ease-out',
            },
        },
    },
    plugins: [
        // Add any additional Tailwind plugins here
        // Example: require('@tailwindcss/forms'),
    ],
}