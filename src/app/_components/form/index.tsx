'use client';
import { theme } from '../../../theme';

export default function StopGenericAutomation() {
	return (
		<section
			style={{
				backgroundImage: `url(${'/assets/form.svg'})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				borderRadius: theme.radius['2xl'],
				padding: `${theme.spacing[8]} ${theme.spacing[6]}`,
				width: '100%',
				maxWidth: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: theme.spacing[8],
				flexWrap: 'wrap',
				boxSizing: 'border-box',
			}}
		>
			{/* Left */}
			<div
				style={{
					flex: '1 1 300px',
					minWidth: '280px',
				}}
			>
				<h2
					style={{
						color: theme.colors.textLight,
						fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
						fontWeight: theme.fontWeight.medium,
						lineHeight: 1.2,
						margin: `0 0 ${theme.spacing[4]} 0`,
					}}
				>
					Stop Operating On
					<br />
					Generic Automation
				</h2>
				<p
					style={{
						color: theme.colors.textLight,
						fontSize: theme.fontSize.base,
						fontWeight: theme.fontWeight.normal,
						lineHeight: 1.6,
						margin: `0 0 ${theme.spacing[5]} 0`,
					}}
				>
					Join growth-focused multi-channel sellers using Maxventory
				</p>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						flexWrap: 'wrap',

						backgroundColor: '#ffffff',
						width: 'fit-content',
						minWidth: '200px',
						borderRadius: theme.radius.full,
						padding: '4px',
					}}
				>
					<div
						style={{
							display: 'flex',
							padding: '4px 8px',
							borderRadius: theme.radius.full,
						}}
					>
						{[
							{ src: '/assets/person1.svg', bg: '#f87171' },
							{ src: '/assets/person2.svg', bg: '#fb923c' },
							{ src: '/assets/person3.svg', bg: '#4ade80' },
						].map((item, i) => (
							<img
								key={i}
								src={item.src}
								alt={`icon-${i}`}
								style={{
									width: '40px',
									height: '40px',
									borderRadius: '50%',
									border: '2px solid #ffffff',
									marginLeft: i > 0 ? '-8px' : '0',
									objectFit: 'cover',
									backgroundColor: item.bg,
								}}
							/>
						))}
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '4px',
							borderRadius: theme.radius.full,
							padding: '4px 12px',
						}}
					>
						<span style={{ color: '#c21616ff', fontSize: '29px' }}>♥</span>
						<span
							style={{
								color: theme.colors.textDark,
								fontSize: '18px',
								fontWeight: theme.fontWeight.medium,
							}}
						>
							12k+
						</span>
					</div>
				</div>
			</div>

			{/* Right - Form */}
			<div
				className='form-card'
				style={{
					flex: '1 1 350px',
					minWidth: '300px',
					maxWidth: '450px',
					background: theme.colors.textLight,
					borderRadius: theme.radius.xl,
					padding: theme.spacing[5],
					boxSizing: 'border-box',
				}}
			>
				{[
					{ label: 'Name', placeholder: 'Kini' },
					{ label: 'Business Name', placeholder: 'Your@company.com' },
					{ label: 'Email', placeholder: 'Add mail' },
					{
						label: 'Monthly SKU Volume',
						placeholder: 'Select scheme',
						isSelect: true,
					},
				].map((field) => (
					<div key={field.label} style={{ marginBottom: theme.spacing[4] }}>
						<label
							style={{
								display: 'block',
								color: theme.colors.textDark,
								fontSize: theme.fontSize.xs,
								fontWeight: theme.fontWeight.medium,
								marginBottom: '6px',
							}}
						>
							{field.label}
						</label>
						<input
							placeholder={field.placeholder}
							style={{
								width: '100%',
								padding: '12px 16px',
								borderRadius: theme.radius.md,
								border: `${theme.borderWidth.thin} solid #e2e8f0`,
								fontSize: theme.fontSize.sm,
								color: '#1e293b',
								background: '#ffffff',
								outline: 'none',
								boxSizing: 'border-box',
								transition: 'border-color 0.2s',
							}}
							onFocus={(e) => {
								e.target.style.borderColor = theme.colors.accentSecondary;
							}}
							onBlur={(e) => {
								e.target.style.borderColor = '#e2e8f0';
							}}
						/>
					</div>
				))}
				<button
					style={{
						width: '100%',
						padding: '8px',
						background: theme.colors.accentSecondary,
						color: theme.colors.textLight,
						border: 'none',
						borderRadius: theme.radius.md,
						fontSize: theme.fontSize.sm,
						fontWeight: theme.fontWeight.semibold,
						cursor: 'pointer',
						transition: 'opacity 0.2s',
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.opacity = '0.9';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.opacity = '1';
					}}
				>
					Request Demo
				</button>
			</div>
		</section>
	);
}
