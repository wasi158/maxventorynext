import { theme } from '../../../theme';

import { rows } from './data';

export default function MeasuredImpact() {
	return (
		<section
			style={{
				marginTop: '30px',
				paddingTop: '50px',
				background: theme.colors.bgLightgray,
				padding: `${theme.spacing[8]} ${theme.spacing[6]} 0 ${theme.spacing[6]}`, // Removed bottom padding
				textAlign: 'center',
			}}
		>
			<h2
				style={{
					color: theme.colors.textDark,
					fontSize: theme.fontSize['3xl'],
					fontWeight: theme.fontWeight.semibold,
					margin: `0 0 ${theme.spacing[2]} 0`,
				}}
			>
				Measured Impact
			</h2>
			<p
				style={{
					color: theme.colors.textMuted,
					fontWeight: theme.fontWeight.normal,
					fontSize: theme.fontSize.base,
					margin: `0 0 ${theme.spacing[6]} 0`,
				}}
			>
				Real results from actual operations
			</p>

			{/* Add a container to center the entire table */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<div
					style={{
						border: `${theme.borderWidth.thin} solid ${theme.colors.borderDim}`,
						borderTopRightRadius: theme.radius.lg,
						borderTopLeftRadius: theme.radius.lg,
						overflow: 'hidden',
						textAlign: 'left',
						maxWidth: '1000px',
						width: '100%',
						marginBottom: '0px',
					}}
				>
					{/* Header */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr',
							background: theme.colors.accentSecondary,
							padding: `14px ${theme.spacing[5]}`,
						}}
					>
						{['Metric', 'Before', 'After'].map((h) => (
							<span
								key={h}
								style={{
									color: theme.colors.textLight,
									fontSize: theme.fontSize.sm,
									fontWeight: theme.fontWeight.semibold,
								}}
							>
								{h}
							</span>
						))}
					</div>

					{/* Rows */}
					{rows.map((row, i) => (
						<div
							key={row.metric}
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr 1fr',
								padding: `14px ${theme.spacing[5]}`,
								borderBottom:
									i < rows.length - 1
										? `${theme.borderWidth.thin} solid ${theme.colors.borderDim}`
										: 'none',
								background: theme.colors.bgWhite, // All rows white
							}}
						>
							<span
								style={{
									color: theme.colors.textDark,
									fontSize: '0.82rem',
									fontWeight: theme.fontWeight.medium,
								}}
							>
								{row.metric}
							</span>
							<span
								style={{ color: theme.colors.textMuted, fontSize: '0.82rem' }}
							>
								{row.before}
							</span>
							<span
								style={{
									color: '#00A32B',
									fontSize: theme.fontSize.sm,
									fontWeight: theme.fontWeight.semibold,
								}}
							>
								{row.after}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
