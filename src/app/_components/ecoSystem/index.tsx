// IntegrationEcosystem.tsx

'use client';

import { theme } from '../../../theme';
import { features, platforms } from './data';
import { useEffect, useRef, useState } from 'react';

export default function IntegrationEcosystem() {
	const [isVisible, setIsVisible] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.2 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			style={{
				marginTop: '40px',
				background: theme.colors.bgLightgray,
				padding: `${theme.spacing[8]} ${theme.spacing[6]}`,
				borderRadius: theme.radius['2xl'],
			}}
		>
			<div
				style={{
					...theme.flex.row,
					gap: theme.spacing[8],
					flexWrap: 'wrap',
					alignItems: 'flex-start',
				}}
			>
				{/* Left */}
				<div
					style={{
						flex: '1',
						minWidth: '220px',
						opacity: isVisible ? 1 : 0,
						transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
						transition: 'opacity 0.6s ease, transform 0.6s ease',
					}}
				>
					<div
						className='md:w-[25%]'
						style={{
							...theme.flex.row,
							alignItems: 'center',
							gap: theme.spacing[2],
							marginBottom: theme.spacing[5],
							background: theme.colors.textLight,

							padding: '7px',
							borderRadius: theme.radius.full,
						}}
					>
						<img src='assets/integration.svg' alt='' />
						<span
							style={{
								color: theme.colors.textMuted,
								fontSize: theme.fontSize.xs,
							}}
						>
							Integration Layer
						</span>
					</div>
					<h2
						style={{
							color: theme.colors.textDark,
							fontSize: theme.fontSize['4xl'],
							fontWeight: theme.fontWeight.semibold,
							margin: `0 0 ${theme.spacing[2]} 0`,
						}}
					>
						Integration Ecosystem
					</h2>
					<p
						style={{
							color: theme.colors.textMuted,
							fontSize: theme.fontSize.base,
							fontWeight: theme.fontWeight.normal,
							lineHeight: 1.6,
							margin: `0 0 ${theme.spacing[6]} 0`,
						}}
					>
						Maxventory builds platform specific AI, pricing logic, and real-time
						synchronization for each marketplace.
					</p>
					<div style={{ ...theme.flex.col, gap: theme.spacing[4] }}>
						{features.map((f, index) => (
							<div
								key={f.label}
								style={{
									...theme.flex.row,
									alignItems: 'flex-start',
									gap: theme.spacing[3],
									opacity: isVisible ? 1 : 0,
									transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
									transition: `opacity 0.5s ease ${0.2 + index * 0.1}s, transform 0.5s ease ${0.2 + index * 0.1}s`,
								}}
							>
								<img
									src='/assets/ecocheck.svg'
									alt={'check'}
									style={{
										width: '22px',
										height: '22px',
										objectFit: 'contain',
									}}
								/>
								<div>
									<p
										style={{
											color: theme.colors.textDark,
											fontSize: theme.fontSize.base,
											fontWeight: theme.fontWeight.semibold,
											margin: `0 0 2px 0`,
										}}
									>
										{f.label}
									</p>
									<p
										style={{
											color: theme.colors.textMuted,
											fontSize: theme.fontSize.md,
											fontWeight: theme.fontWeight.normal,
											margin: 0,
										}}
									>
										{f.sub}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right Grid */}
				<div
					className='platforms-grid'
					style={{
						flex: 1,
						minWidth: '280px',
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)', // default: 3 columns
						gap: theme.spacing[4],
					}}
				>
					{platforms.map((p, index) => {
						const isHovered = hoveredIndex === index;

						return (
							<div
								key={p.label}
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
								style={{
									background: theme.colors.bgWhite,
									borderRadius: theme.radius.lg,
									padding: `${theme.spacing[4]} ${theme.spacing[3]}`,
									paddingBottom: '30px',
									opacity: isVisible ? 1 : 0,
									transform: isVisible
										? isHovered
											? 'translateY(-5px)'
											: 'translateY(0)'
										: 'translateY(30px)',
									boxShadow: isHovered
										? '0 10px 25px -5px rgba(88, 92, 228, 0.15)'
										: 'none',
									transition: `opacity 0.5s ease ${0.3 + index * 0.05}s, transform 0.3s ease, box-shadow 0.3s ease`,
									cursor: 'pointer',
								}}
							>
								<p
									style={{
										color: isHovered ? '#585CE4' : theme.colors.textMuted,
										fontSize: theme.fontSize.xs,
										margin: `0 0 ${theme.spacing[3]} 0`,
										transition: 'color 0.3s ease',
									}}
								>
									{p.label}
								</p>

								<div
									style={{
										...theme.flex.center,
										height: '36px',
										opacity: isHovered ? 1 : 0.35,
										filter: isHovered
											? 'grayscale(0%) sepia(1) saturate(5) hue-rotate(210deg)'
											: 'grayscale(100%)',
										transition: 'opacity 0.3s ease, filter 0.3s ease',
									}}
								>
									{p.content}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* 👇 Responsive grid breakpoints */}
			<style>{`
				/* Tablet: 2 columns */
				@media (max-width: 768px) {
					.platforms-grid {
						grid-template-columns: repeat(2, 1fr) !important;
						min-width: 100% !important;
					}
				}

				/* Mobile: 1 column */
				@media (max-width: 480px) {
					.platforms-grid {
						grid-template-columns: 1fr !important;
						min-width: 100% !important;
					}
				}
			`}</style>
		</section>
	);
}
