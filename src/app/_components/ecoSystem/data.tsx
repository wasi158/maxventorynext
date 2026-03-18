// data/platforms.tsx
export const platforms = [
	{
		label: 'Ebay',
		highlighted: false,
		content: (
			<img
				src='assets/ecoebay.svg'
				alt='eBay'
				style={{
					height: '56px',
					width: 'auto',
					objectFit: 'contain',
				}}
			/>
		),
	},
	{
		label: 'Vinted',
		highlighted: false,
		content: (
			<img
				src='assets/ecovinted.svg'
				alt='Vinted'
				style={{
					height: '56px',
					width: 'auto',
					objectFit: 'contain',
				}}
			/>
		),
	},
	{
		label: 'shopify',
		highlighted: false,
		content: (
			<img
				src='assets/ecoshop.svg'
				alt=' Shopify'
				style={{
					height: '56px',
					width: 'auto',
					objectFit: 'contain',
				}}
			/>
		),
	},
	{
		label: 'Depop',
		highlighted: false,
		content: (
			<img
				src='assets/ecodepop.svg'
				alt='Depop'
				style={{
					height: '46px',
					width: '76px',
					objectFit: 'contain',
				}}
			/>
		),
	},
	{
		label: 'Facebook',
		highlighted: true,
		content: (
			<img
				src='/assets/ecofacebook (2).svg'
				alt='Facebook Marketplace'
				style={{
					height: '56px',
					width: 'auto',
					objectFit: 'contain',
				}}
			/>
		),
	},
	{
		label: 'Amazon',
		highlighted: false,
		content: (
			<img
				src='/assets/ecoamazon.svg'
				alt='Amazon'
				style={{
					height: '56px',
					width: 'auto',
					objectFit: 'contain',
				}}
			/>
		),
	},
	{
		label: 'TikTok Shop',
		highlighted: false,
		content: (
			<img
				src='/assets/ecotiktok.svg'
				alt='TikTok Shop'
				style={{
					height: '56px',
					width: 'auto',
					objectFit: 'contain',
				}}
			/>
		),
	},
	{
		label: 'Walmart',
		highlighted: false,
		content: (
			<img
				src='/assets/ecowalmart.svg'
				alt='Walmart'
				style={{
					height: '56px',
					width: 'auto',
					objectFit: 'contain',
				}}
			/>
		),
	},
];
// data/features.ts
export const features = [
	{
		label: 'Platform Specific AI Pipelines:',
		sub: "Tailored to each marketplace's algorithm",
	},
	{
		label: 'Webhook-First Architecture:',
		sub: 'For Real-Time Stock Synchronization',
	},
	{
		label: 'Warehouse Intelligence Layer:',
		sub: 'With Location Tracking And Barcode Validation',
	},
];
