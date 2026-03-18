'use client';

import React from 'react';
import { theme } from '../../../theme';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const navLinks = [
		{ label: 'Problem', id: 'multi-channel' },
		{ label: 'Platform AI', id: 'platform-ai' },
		{ label: 'Features', id: 'features' },
		{ label: 'Results', id: 'results' },
		{ label: "Who It's For", id: 'who-its-for' },
		{ label: 'Growth', id: 'revenue-growth' },
	];

	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			className='w-[96%] mt-2 mx-auto  sticky top-1 z-50'
			style={{
				backgroundColor: theme.colors.bgDark,
				borderColor: theme.colors.borderDim,
				borderBottomWidth: theme.borderWidth.thin,
				borderRadius: theme.radius.md,
			}}
		>
			<div className='w-full px-4 sm:px-6 lg:px-4'>
				<div className='flex items-center justify-between h-14 sm:h-16'>
					{/* Logo/Brand */}
					<div className='flex-shrink-0'>
						<img
							src='maxventorylogo.svg'
							alt='Maxventory Logo'
							className='h-14 sm:h-16 md:h-20 w-[130px] sm:w-[148px]'
						/>
					</div>

					{/* Desktop Navigation Links */}
					<div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
						{navLinks.map((item) => (
							<a
								key={item.label}
								href={`#${item.id}`}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.id);
								}}
								className='text-sm lg:text-base transition-all duration-200 hover:scale-105'
								style={{
									color: theme.colors.textLight,
									fontWeight: theme.fontWeight.normal,
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color = theme.colors.accentSecondary)
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color = theme.colors.textLight)
								}
							>
								{item.label}
							</a>
						))}
					</div>

					{/* Request Demo Button - Desktop */}
					<div className='hidden md:block'>
						<button
							onClick={() => scrollToSection('request-demo')}
							className='px-4 lg:px-6 py-1.5 lg:py-2 text-sm lg:text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg'
							style={{
								backgroundColor: theme.colors.accentSecondary,
								color: theme.colors.textLight,
								fontFamily: theme.fonts?.primary || '"Inter", sans-serif',
								fontWeight: theme.fontWeight.medium,
								borderRadius: theme.radius.sm,
							}}
						>
							Request Demo
						</button>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className='p-1.5 rounded-md transition-all duration-200 hover:bg-opacity-10 hover:bg-white focus:outline-none'
							style={{ color: theme.colors.textLight }}
							aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
						>
							{isMobileMenuOpen ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='h-5 w-5 sm:h-6 sm:w-6'
									style={{ color: theme.colors.textLight }}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='h-5 w-5 sm:h-6 sm:w-6'
									style={{ color: theme.colors.textLight }}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu with animation */}
			<div
				className={`md:hidden absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${
					isMobileMenuOpen
						? 'max-h-[500px] opacity-100 visible'
						: 'max-h-0 opacity-0 invisible'
				}`}
				style={{
					backgroundColor: theme.colors.bgLightgray,
					borderBottom: isMobileMenuOpen
						? `1px solid ${theme.colors.borderDim}`
						: 'none',
					boxShadow: isMobileMenuOpen
						? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
						: 'none',
					borderRadius: `0 0 ${theme.radius.md} ${theme.radius.md}`,
				}}
			>
				<div className='px-4 py-3'>
					{/* Navigation Links with Dividers */}
					{navLinks.map((item, index) => (
						<React.Fragment key={item.label}>
							<a
								href={`#${item.id}`}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.id);
								}}
								className='block px-4 py-2.5 text-base rounded-lg transition-all duration-200 nav-link-mobile'
								style={{
									color: theme.colors.textDark,
									fontWeight: theme.fontWeight.normal,
									backgroundColor: theme.colors.bgLightgray,
									animation: isMobileMenuOpen
										? `slideIn 0.3s ease forwards ${index * 0.05}s`
										: 'none',
								}}
							>
								{item.label}
							</a>

							{/* Divider between links, not after the last one */}
							{index < navLinks.length - 1 && (
								<div
									style={{
										height: '1px',
										backgroundColor: theme.colors.borderDim,
										marginLeft: '16px',
										marginRight: '16px',
										opacity: 0.6,
									}}
								/>
							)}
						</React.Fragment>
					))}

					{/* Divider before Request Demo button */}
					<div
						style={{
							height: '1px',
							backgroundColor: theme.colors.borderDim,
							margin: '8px 16px',
						}}
					/>

					{/* Request Demo Button - Mobile */}
					<div className='px-4 py-2'>
						<button
							onClick={() => scrollToSection('request-demo')}
							className='w-full px-4 py-2 text-base rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]'
							style={{
								backgroundColor: theme.colors.accentSecondary,
								color: theme.colors.textLight,
								fontWeight: theme.fontWeight.medium,
								borderRadius: theme.radius.md,
							}}
						>
							Request Demo
						</button>
					</div>
				</div>
			</div>

			{/* Add animation keyframes */}
			<style>{`
				@keyframes slideIn {
					from {
						opacity: 0;
						transform: translateX(-10px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
			`}</style>
		</nav>
	);
};

export default Navbar;
