// styles/theme.ts
export const theme = {
	colors: {
		bgDark: '#0c0f15',
		bgCard: '#131820',
		bglight: '#DEE7EF',
		bgLightgray: '#F7F8F9',
		bgWhite: '#FFFFFF',
		bglightred: 'rgba(231, 0, 11, 0.05)',
		accentPrimary: '#00e5b0',
		accentSecondary: '#585CE4',
		textLight: '#ffffff',
		textMuted: '#687183',
		textGray: '#595959',
		textDark: '#171C26',
		textBlack: '#171717',
		borderDim: '#DEE7EF',
		statBg: '#1e2632',
	},

	// Fonts
	fonts: {
		primary: '"Inter"',
	},

	fontWeight: {
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
	},

	fontSize: {
		xs: '0.75rem',
		sm: '0.875rem',
		base: '1.125rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '2rem',
		'4xl': '2.625rem', // 42px
		'5xl': '3rem',
	},

	spacing: {
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		5: '1.5rem',
		6: '2rem',
		8: '3rem',
		10: '4rem',
	},

	radius: {
		sm: '0.375rem',
		md: '0.5rem',
		lg: '0.75rem',
		xl: '1rem',
		'2xl': '1.5rem',
		full: '9999px',
	},

	borderWidth: {
		thin: '1px',
		medium: '2px',
	},

	flex: {
		row: {
			display: 'flex',
			flexDirection: 'row' as const,
		},
		col: {
			display: 'flex',
			flexDirection: 'column' as const,
		},
		center: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		between: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		wrap: {
			display: 'flex',
			flexWrap: 'wrap' as const,
		},
	},
} as const;

export type Theme = typeof theme;
