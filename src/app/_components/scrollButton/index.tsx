'use client';

import { useState, useEffect } from 'react';

const ScrollButton = () => {
	const [showButton, setShowButton] = useState(false);
	const [isAtBottom, setIsAtBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const windowHeight = window.innerHeight;
			const docHeight = document.documentElement.scrollHeight;

			setShowButton(scrollTop > 300);
			setIsAtBottom(scrollTop + windowHeight >= docHeight - 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	};

	return (
		<button
			onClick={isAtBottom ? scrollToTop : scrollToBottom}
			aria-label={isAtBottom ? 'Scroll to top' : 'Scroll to bottom'}
			style={{
				position: 'fixed',
				bottom: '2rem',
				right: '2rem',
				width: '48px',
				height: '48px',
				borderRadius: '50%',
				backgroundColor: '#585CE4',
				color: '#ffffff',
				border: 'none',
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				boxShadow: '0 4px 14px rgba(91, 58, 237, 0.5)',
				opacity: showButton ? 1 : 0,
				transform: showButton
					? 'translateY(0) scale(1)'
					: 'translateY(20px) scale(0.8)',
				transition:
					'opacity 0.3s ease, transform 0.3s ease, background-color 0.2s ease',
				pointerEvents: showButton ? 'auto' : 'none',
				zIndex: 1000,
			}}
			onMouseEnter={(e) => {
				(e.currentTarget as HTMLButtonElement).style.backgroundColor =
					'#585CE4';
				(e.currentTarget as HTMLButtonElement).style.transform =
					'translateY(0) scale(1.1)';
			}}
			onMouseLeave={(e) => {
				(e.currentTarget as HTMLButtonElement).style.backgroundColor =
					'#585CE4';
				(e.currentTarget as HTMLButtonElement).style.transform =
					'translateY(0) scale(1)';
			}}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='22'
				height='22'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				style={{
					transition: 'transform 0.4s ease',
					transform: isAtBottom ? 'rotate(0deg)' : 'rotate(180deg)',
				}}
			>
				<path d='M18 15l-6-6-6 6' />
			</svg>
		</button>
	);
};

export default ScrollButton;
