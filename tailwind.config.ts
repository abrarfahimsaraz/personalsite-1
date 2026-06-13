import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'xs': '0 1px 2px 0 hsl(var(--shadow-color) / 0.04)',
  			'sm': '0 1px 3px 0 hsl(var(--shadow-color) / 0.06), 0 1px 2px -1px hsl(var(--shadow-color) / 0.06)',
  			'md': '0 4px 12px -2px hsl(var(--shadow-color) / 0.08), 0 2px 6px -2px hsl(var(--shadow-color) / 0.06)',
  			'lg': '0 12px 28px -6px hsl(var(--shadow-color) / 0.12), 0 4px 10px -4px hsl(var(--shadow-color) / 0.08)',
  			'xl': '0 24px 48px -12px hsl(var(--shadow-color) / 0.18), 0 8px 16px -8px hsl(var(--shadow-color) / 0.10)',
  			'glow': '0 0 0 1px hsl(var(--primary) / 0.1), 0 8px 30px -6px hsl(var(--primary) / 0.35)',
  			'glow-sm': '0 4px 16px -4px hsl(var(--primary) / 0.30)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'fade-in-up': {
  				from: { opacity: '0', transform: 'translateY(16px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in': {
  				from: { opacity: '0' },
  				to: { opacity: '1' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'shimmer': {
  				'100%': { transform: 'translateX(100%)' }
  			},
  			'aurora': {
  				'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
  				'33%': { transform: 'translate(3%, -4%) scale(1.05)' },
  				'66%': { transform: 'translate(-3%, 3%) scale(0.97)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
  			'fade-in': 'fade-in 0.6s ease-out both',
  			'float': 'float 6s ease-in-out infinite',
  			'aurora': 'aurora 18s ease-in-out infinite'
  		},
  		fontFamily: {
  			sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  			display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
  			mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
  		}
  	}
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
