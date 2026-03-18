import { theme } from '../../../theme';

import { stats } from './stats';

export default function DriveAtScale() {
	return (
		<section
			style={{
				marginTop: '40px',
				padding: `${theme.spacing[8]} ${theme.spacing[6]}`,
				textAlign: 'center',
			}}
		>
			{/* Badge */}
			<div
				style={{
					display: 'inline-flex',
					alignItems: 'center',
					gap: theme.spacing[2],
					background: '#c8f135',
					borderRadius: theme.radius.full,
					padding: `5px ${theme.spacing[3]}`,
					marginBottom: theme.spacing[5],
				}}
			>
				<img
					src='/assets/scale.svg'
					alt={'check'}
					style={{
						width: '22px',
						height: '22px',
						objectFit: 'contain',
					}}
				/>
				<span
					style={{
						color: theme.colors.textDark,
						fontSize: theme.fontSize.xs,
						fontWeight: theme.fontWeight.semibold,
						letterSpacing: '0.02em',
					}}
				>
					Performance Layer
				</span>
			</div>

			{/* Heading */}
			<h2
				style={{
					color: theme.colors.textDark,
					fontSize: theme.fontSize['5xl'],
					fontWeight: theme.fontWeight.semibold,
					margin: `0 0 ${theme.spacing[3]} 0`,
					lineHeight: 1.15,
				}}
			>
				Drive Precision At Scale
			</h2>

			{/* Subtext */}
			<p
				style={{
					color: theme.colors.textMuted,
					fontSize: theme.fontSize.base,
					fontWeight: theme.fontWeight.normal,
					lineHeight: 1.7,
					margin: `0 auto ${theme.spacing[6]}`,
					maxWidth: '450px',
				}}
			>
				Eliminate double selling and inventory loss with automated syncing and
				warehouse mapping.
			</p>

			{/* Cards */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: theme.spacing[3],
					textAlign: 'left',
				}}
				className='stats-grid' // Add class for responsive styling
			>
				{stats.map((s) => (
					<div
						key={s.title}
						style={{
							background: theme.colors.bgWhite,
							border: `${theme.borderWidth.thin} solid ${theme.colors.borderDim}`,
							borderRadius: theme.radius.lg,
							padding: theme.spacing[4],
							marginTop: '10px',
						}}
						className='stat-card'
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: theme.spacing[2],
								marginBottom: theme.spacing[2],
							}}
						>
							{s.icon}
							<span
								style={{
									color: theme.colors.textDark,
									fontSize: theme.fontSize.base,
									fontWeight: theme.fontWeight.semibold,
								}}
							>
								{s.title}
							</span>
						</div>
						<p
							style={{
								color: theme.colors.textMuted,
								fontSize: theme.fontSize.sm,
								margin: 0,
							}}
						>
							<span
								style={{
									color: theme.colors.textDark,
									fontWeight: theme.fontWeight.bold,
								}}
							>
								{s.highlight}
							</span>{' '}
							{s.sub}
						</p>
					</div>
				))}
			</div>

			{/* Add responsive styles */}
			<style>
				{`
		@media (max-width: 768px) {
			.stats-grid {
				grid-template-columns: repeat(2, 1fr) !important;
			}
		}
		
		@media (max-width: 480px) {
			.stats-grid {
				grid-template-columns: 1fr !important;
				gap: ${theme.spacing[2]} !important;
			}
			
			.stat-card {
				padding: ${theme.spacing[3]} !important;
			}
		}
	`}
			</style>
		</section>
	);
}
