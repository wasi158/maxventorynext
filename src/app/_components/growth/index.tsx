import { theme } from '../../../theme';

export default function RevenueGrowth() {
	return (
		<section
			style={{
				background: theme.colors.bgWhite,
				padding: `${theme.spacing[8]} ${theme.spacing[6]}`,

				textAlign: 'center',
			}}
		>
			{/* Heading */}
			<h2
				style={{
					color: theme.colors.textDark,
					fontSize: theme.fontSize['4xl'],
					fontWeight: theme.fontWeight.semibold,
					lineHeight: 1.2,
					margin: `0 0 ${theme.spacing[3]} 0`,
				}}
			>
				<span style={{ color: theme.colors.accentSecondary }}>300%</span>{' '}
				Revenue Growth
				<br />
				Across Every Marketplace
			</h2>

			<p
				style={{
					color: theme.colors.textMuted,
					fontSize: theme.fontSize.lg,
					fontWeight: theme.fontWeight.normal,
					lineHeight: 1.7,
					margin: `0 auto ${theme.spacing[6]}`,
					maxWidth: '450px',
				}}
			>
				Sync inventory across eBay, Depop, Shopify, and Vinted with zero
				double-sells or lost stock.
			</p>

			{/* Graph Image */}
			<img
				src={'/assets/Growth.svg'}
				alt='300% Revenue Growth Dashboard'
				style={{
					width: '100%',
					maxWidth: '860px',
					borderRadius: theme.radius.xl,
					display: 'block',
					margin: '0 auto',
				}}
			/>
		</section>
	);
}
