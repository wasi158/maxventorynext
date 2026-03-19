// components/Hero.tsx

import { theme } from '../../../theme';

const Hero = () => {
	return (
		<section
			className='relative w-full overflow-hidden'
			style={{
				minHeight: 'calc(100vh - 80px)', // Adjust based on your navbar height
			}}
		>
			{/* <div className='relative z-99'>
				<Navbar />
			</div> */}

			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<img
					src='/assets/max-ventory.svg' // Replace with your background image path
					alt='Background'
					className='w-full  object-cover'
				/>
			</div>

			{/* Content Container - Centered */}
			<div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-12 h-full flex items-center justify-center'>
				<div className='w-full'>
					{/* Main Content - Centered */}
					<div className='text-center space-y-8 md:space-y-8'>
						{/* Main Heading */}
						<h1
							className='md:w-[80%] mx-auto text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight'
							style={{
								color: theme.colors.accentSecondary,
								fontWeight: theme.fontWeight.semibold,
							}}
						>
							<span style={{ color: theme.colors.textDark }}>Platform</span>{' '}
							<span style={{ color: theme.colors.textDark }}>Specific AI</span>{' '}
							for Multi Channel Inventory
						</h1>

						{/* Description */}
						<p
							className='text-base sm:text-lg md:text-xl max-w-2xl mx-auto'
							style={{
								color: theme.colors.textMuted,
								fontSize: theme.fontSize.lg,

								fontWeight: theme.fontWeight.normal,
								lineHeight: 1.6,
							}}
						>
							Real-time stock sync, marketplace-native AI, and warehouse
							intelligence for vintage & one-of-a-kind inventory businesses.
						</p>

						{/* Laptop Image - Centered below text */}
						<div className='flex justify-center pt-8 md:pt-4'>
							<div className='relative w-full max-w-md md:max-w-lg lg:max-w-xl'>
								<img
									src='/assets/laptop.svg'
									alt='Laptop Dashboard'
									className='w-full h-auto object-contain'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
