'use client';
import { theme } from '../../../theme';
import { cards } from './cards';
import { useEffect, useRef, useState } from 'react';

export default function BuiltForInventory() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// 👇 Toggle on every scroll in/out — no disconnect
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
				background: theme.colors.bgWhite,
				padding: `${theme.spacing[8]} ${theme.spacing[6]}`,
			}}
		>
			<h2
				style={{
					color: theme.colors.textDark,
					fontSize: theme.fontSize['3xl'],
					fontWeight: theme.fontWeight.bold,
					lineHeight: 1.2,
					margin: `0 0 ${theme.spacing[8]} 0`,
					textAlign: 'center',
					opacity: isVisible ? 1 : 0,
					transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
					transition: 'opacity 0.6s ease, transform 0.6s ease',
				}}
			>
				Built For Unique Inventory
				<br />
				Businesses
			</h2>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(4, 260px)',
						gap: theme.spacing[3],
						justifyContent: 'center',
					}}
					className='cards-grid'
				>
					{cards.map((card, index) => (
						<div
							key={card.title}
							style={{
								background: theme.colors.bgLightgray,
								borderRadius: theme.radius.lg,
								padding: theme.spacing[5],
								width: '100%',
								opacity: isVisible ? 1 : 0,
								transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
								transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
							}}
							className='card-item'
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-5px)';
								e.currentTarget.style.boxShadow =
									'0 10px 20px rgba(0, 0, 0, 0.1)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.boxShadow = 'none';
							}}
						>
							<div
								style={{
									marginBottom: theme.spacing[4],
								}}
							>
								{card.icon}
							</div>
							<p
								style={{
									color: theme.colors.textDark,
									fontSize: theme.fontSize.sm,
									fontWeight: theme.fontWeight.bold,
									margin: `0 0 ${theme.spacing[2]} 0`,
								}}
							>
								{card.title}
							</p>
							<p
								style={{
									color: theme.colors.textMuted,
									fontSize: theme.fontSize.sm,
									lineHeight: 1.5,
									margin: 0,
								}}
							>
								{card.sub}
							</p>
						</div>
					))}
				</div>
			</div>

			<style>
				{`
					.card-item {
						transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
					}

					.card-item:hover {
						background: #ffffff !important;
					}

					/* Large Desktop: 1200px and above */
					@media (max-width: 1200px) {
						.cards-grid {
							grid-template-columns: repeat(4, 220px) !important;
						}
					}
					
					/* Desktop: 1024px to 1200px */
					@media (max-width: 1024px) {
						.cards-grid {
							grid-template-columns: repeat(2, 1fr) !important;
							max-width: 600px;
							width: 100%;
						}
						
						.card-item {
							padding: ${theme.spacing[4]} !important;
						}
					}
					
					/* Tablet: 768px to 1024px */
					@media (max-width: 768px) {
						.cards-grid {
							grid-template-columns: repeat(2, 1fr) !important;
							max-width: 500px;
							gap: ${theme.spacing[2]} !important;
						}
						
						.card-item {
							padding: ${theme.spacing[4]} !important;
						}
					}
					
					/* Mobile: 640px and below */
					@media (max-width: 640px) {
						.cards-grid {
							grid-template-columns: 1fr !important;
							max-width: 400px;
						}
						
						.card-item {
							padding: ${theme.spacing[4]} !important;
						}
					}
					
					/* Small Mobile: 480px and below */
					@media (max-width: 480px) {
						.cards-grid {
							max-width: 100%;
							padding: 0 ${theme.spacing[2]};
						}
						
						.card-item {
							padding: ${theme.spacing[3]} !important;
						}
					}
					
					/* Extra Small Mobile: 360px and below */
					@media (max-width: 360px) {
						.card-item {
							padding: ${theme.spacing[2]} !important;
						}
					}
				`}
			</style>
		</section>
	);
}
