import { theme } from '../../../theme';
import { platforms, issues } from './data';

export default function MultiChannelSection() {
	return (
		<section
			style={{
				background: theme.colors.bgWhite,
				padding: `${theme.spacing[8]} ${theme.spacing[6]}`,
				paddingTop: '40px',
			}}
		>
			<h2
				className='md:w-[40%] '
				style={{
					color: theme.colors.textDark,
					fontSize: theme.fontSize['4xl'],
					fontWeight: theme.fontWeight.semibold,
					lineHeight: 1.2,
					margin: `0 0 ${theme.spacing[2]} 0`,
				}}
			>
				Multi Channel Tools Are Capping Growth
			</h2>
			<p
				style={{
					color: theme.colors.textMuted,
					fontSize: theme.fontSize.base,
					margin: `0 0 ${theme.spacing[6]} 0`,
				}}
			>
				Most inventory systems treat every marketplace the same
			</p>

			<div className='multichannel-grid'>
				{/* The Reality */}
				<div
					style={{
						flex: 1,
						minWidth: '260px',
						background: theme.colors.textLight,
						border: `${theme.borderWidth.thin} solid ${theme.colors.borderDim}`,
						borderRadius: theme.radius.lg,
					}}
				>
					<p
						style={{
							color: theme.colors.textDark,
							fontSize: theme.fontSize.base,
							fontWeight: theme.fontWeight.semibold,
							margin: `0 0 ${theme.spacing[3]} 0`,
							letterSpacing: '0.03em',
							paddingBottom: theme.spacing[2],
							borderBottom: `1px solid ${theme.colors.borderDim}`,
							padding: theme.spacing[3],
							background: '#f9f9f9',
						}}
					>
						The Reality
					</p>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: theme.spacing[1],
						}}
					>
						{platforms.map((p) => (
							<div key={p.name} className='platform-item'>
								<div
									style={{
										width: '32px',
										height: '32px',
										borderRadius: theme.radius.sm,
										background: theme.colors.textLight,
										...theme.flex.center,
										flexShrink: 0,
										overflow: 'hidden',
									}}
								>
									<img
										src={p.logo}
										alt={p.name}
										style={{
											width: '28px',
											height: '28px',
											objectFit: 'contain',
										}}
									/>
								</div>
								<div>
									<p
										style={{
											color: theme.colors.textDark,
											fontSize: theme.fontSize.md,
											fontWeight: theme.fontWeight.semibold,
											margin: `0 0 2px 0`,
										}}
									>
										{p.name}
									</p>
									<p
										style={{
											color: theme.colors.textMuted,
											fontSize: theme.fontSize.xs,
											margin: 0,
										}}
									>
										{p.sub}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Generic Automation */}
				<div
					style={{
						flex: 1,
						minWidth: '260px',
						background: theme.colors.textLight,
						border: `${theme.borderWidth.thin} solid #E7000b`,
						borderRadius: theme.radius.lg,
					}}
				>
					<p
						style={{
							color: theme.colors.textDark,
							fontSize: theme.fontSize.base,
							fontWeight: theme.fontWeight.semibold,
							margin: `0 0 ${theme.spacing[4]} 0`,
							letterSpacing: '0.03em',
							borderBottom: `1px solid #E7000b`,
							padding: theme.spacing[3],
							background: theme.colors.bglightred,
						}}
					>
						Generic Automation Leads To
					</p>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: theme.spacing[3],
						}}
					>
						{issues.map((issue) => (
							<div
								key={issue}
								style={{
									...theme.flex.row,
									alignItems: 'center',
									gap: theme.spacing[2],
									padding: theme.spacing[3],
								}}
							>
								<img
									src='/assets/check.svg'
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
										fontSize: theme.fontSize.md,
										fontWeight: theme.fontWeight.medium,
									}}
								>
									{issue}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
