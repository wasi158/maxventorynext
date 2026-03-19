'use client';
import { useState } from 'react';
import { theme } from '../../../theme';

const productLinks = ['Features', 'Results', 'Request Demo'];
const companyLinks = ['About', 'Privacy Policy', 'Support', 'Terms of Service'];

const socialIcons = [
	{ key: 'facebook', src: '/assets/Facebook.svg', alt: 'Facebook' },
	{ key: 'twitter', src: '/assets/Twitter.svg', alt: 'X (Twitter)' },
	{ key: 'instagram', src: '/assets/Instagram.svg', alt: 'Instagram' },
	{ key: 'youtube', src: '/assets/Youtube.svg', alt: 'YouTube' },
];

export default function Footer() {
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);
	const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

	const scrollToSection = (linkText: string) => {
		// Map link text to actual section IDs used in your app
		const idMap: { [key: string]: string } = {
			Features: 'features',
			Results: 'results',
			'Request Demo': 'request-demo',
			About: 'about',
			'Privacy Policy': 'privacy-policy',
			Support: 'support',
			'Terms of Service': 'terms-of-service',
		};

		const id = idMap[linkText] || linkText.toLowerCase().replace(' ', '-');
		const el = document.getElementById(id);

		if (el) {
			// Get navbar height for offset
			const navbar = document.querySelector('nav');
			const navbarHeight = navbar?.offsetHeight || 64;

			// Calculate position with offset
			const elementPosition =
				el.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elementPosition - navbarHeight - 16; // Added 16px extra padding

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		} else {
			console.warn(`Element with id "${id}" not found`);
		}
	};

	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		link: string,
	) => {
		e.preventDefault();
		scrollToSection(link);
	};

	return (
		<footer
			style={{
				background: theme.colors.bgLightgray,
				padding: `${theme.spacing[8]} ${theme.spacing[6]} 0`,
				marginTop: '90px',
			}}
		>
			{/* Top */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1.5fr 1fr 1fr',
					gap: theme.spacing[8],
					paddingBottom: theme.spacing[8],
				}}
				className='footer-grid'
			>
				{/* Brand */}
				<div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: theme.spacing[2],
							marginBottom: theme.spacing[4],
						}}
					>
						<img
							className='w-[148px]'
							src='assets/footerlogo.svg'
							alt='Maxventory Logo'
						/>
					</div>
					<p
						style={{
							color: theme.colors.textGray,
							fontSize: theme.fontSize.sm,
							lineHeight: 1.6,
							margin: 0,
							maxWidth: '340px',
						}}
					>
						Platform-aware inventory intelligence for unique, one-of-a-kind
						multi-channel sellers.
					</p>
				</div>

				{/* Product */}
				<div>
					<p
						style={{
							color: theme.colors.textBlack,
							fontSize: theme.fontSize.md,
							fontWeight: theme.fontWeight.bold,
							margin: `0 0 ${theme.spacing[4]} 0`,
						}}
					>
						Product
					</p>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: theme.spacing[3],
						}}
					>
						{productLinks.map((l) => (
							<a
								key={l}
								href={`#${l.toLowerCase().replace(' ', '-')}`}
								onClick={(e) => handleLinkClick(e, l)}
								onMouseEnter={() => setHoveredLink(l)}
								onMouseLeave={() => setHoveredLink(null)}
								style={{
									color: hoveredLink === l ? '#585CE4' : theme.colors.textGray,
									fontSize: theme.fontSize.sm,
									fontWeight: theme.fontWeight.normal,
									textDecoration: 'none',
									transition: 'color 0.2s ease',
									background: 'none',
									outline: 'none',
									cursor: 'pointer',
									display: 'inline-block',
								}}
							>
								{l}
							</a>
						))}
					</div>
				</div>

				{/* Company */}
				<div>
					<p
						style={{
							color: theme.colors.textBlack,
							fontSize: theme.fontSize.md,
							fontWeight: theme.fontWeight.bold,
							margin: `0 0 ${theme.spacing[4]} 0`,
						}}
					>
						Company
					</p>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: theme.spacing[3],
						}}
					>
						{companyLinks.map((l) => (
							<a
								key={l}
								href={`#${l.toLowerCase().replace(' ', '-')}`}
								onClick={(e) => handleLinkClick(e, l)}
								onMouseEnter={() => setHoveredLink(l)}
								onMouseLeave={() => setHoveredLink(null)}
								style={{
									color: hoveredLink === l ? '#585CE4' : theme.colors.textGray,
									fontSize: theme.fontSize.sm,
									fontWeight: theme.fontWeight.normal,
									textDecoration: 'none',
									transition: 'color 0.2s ease',
									background: 'none',
									outline: 'none',
									cursor: 'pointer',
									display: 'inline-block',
								}}
							>
								{l}
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Divider */}
			<div
				style={{
					borderTop: `${theme.borderWidth.thin} solid ${theme.colors.borderDim}`,
				}}
			/>

			{/* Bottom */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: `18px 0`,
				}}
				className='footer-bottom'
			>
				<span style={{ color: theme.colors.textMuted, fontSize: '0.78rem' }}>
					© 2026 Maxventory. All rights reserved.
				</span>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: theme.spacing[4],
					}}
					className='social-icons'
				>
					{socialIcons.map(({ key, src, alt }) => (
						<a
							key={key}
							href='#'
							className='social-icon-link'
							onMouseEnter={() => setHoveredSocial(key)}
							onMouseLeave={() => setHoveredSocial(null)}
							style={{
								display: 'inline-flex',
								background: 'none',
								border: 'none',
								padding: 0,
								lineHeight: 0,
								transition: 'transform 0.3s ease',
								transform:
									hoveredSocial === key ? 'translateY(-4px)' : 'translateY(0)',
							}}
							onClick={(e) => {
								e.preventDefault();
								// Handle social media links
								console.log(`Open ${alt} link`);
							}}
						>
							<img
								src={src}
								alt={alt}
								style={{
									width: '25px',
									height: '25px',
									display: 'block',
									transition: 'all 0.3s ease',
									transform: hoveredSocial === key ? 'scale(1.2)' : 'scale(1)',
								}}
							/>
						</a>
					))}
				</div>
			</div>

			{/* Responsive + Social icon styles */}
			<style>{`
				/* Tablet and below */
				@media (max-width: 768px) {
					.footer-grid {
						grid-template-columns: 1fr !important;
						gap: ${theme.spacing[6]} !important;
					}
					
					.footer-bottom {
						flex-direction: column !important;
						gap: ${theme.spacing[4]} !important;
						align-items: flex-start !important;
					}
					
					.social-icons {
						margin-top: ${theme.spacing[2]} !important;
					}
				}
				
				/* Small mobile */
				@media (max-width: 480px) {
					.footer-bottom {
						flex-direction: column !important;
						gap: ${theme.spacing[3]} !important;
					}
				}

				/* Social icon animations */
				.social-icon-link {
					transition: transform 0.3s ease;
				}
				
				.social-icon-link:hover {
					transform: translateY(-4px);
				}
				
				.social-icon-link img {
					transition: all 0.3s ease;
				}
			`}</style>
		</footer>
	);
}
