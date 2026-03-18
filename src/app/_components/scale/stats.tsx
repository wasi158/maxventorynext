export const stats = [
	{
		icon: (
			<img
				src='/assets/realtime.svg'
				alt='Real Time Stock Sync'
				style={{
					width: '19',
					height: '19',
					filter:
						'brightness(0) saturate(100%) invert(38%) sepia(98%) saturate(1616%) hue-rotate(215deg) brightness(97%) contrast(91%)', // This approximates theme.colors.accentSecondary (#585CE4)
				}}
			/>
		),
		title: 'Real Time Stock Sync',
		highlight: '3-5 daily',
		sub: 'Near Zero double-sells.',
	},
	{
		icon: (
			<img
				src='/assets/inteligent.svg'
				alt='Intelligent Repricing'
				style={{
					width: '19',
					height: '19',
					filter:
						'brightness(0) saturate(100%) invert(38%) sepia(98%) saturate(1616%) hue-rotate(215deg) brightness(97%) contrast(91%)',
				}}
			/>
		),
		title: 'Intelligent Repricing',
		highlight: '34-14',
		sub: 'days time to sell',
	},
	{
		icon: (
			<img
				src='/assets/warehouse.svg'
				alt='Warehouse Intelligence'
				style={{
					width: '19',
					height: '19',
					filter:
						'brightness(0) saturate(100%) invert(38%) sepia(98%) saturate(1616%) hue-rotate(215deg) brightness(97%) contrast(91%)',
				}}
			/>
		),
		title: 'Warehouse Intelligence',
		highlight: '12%-3%',
		sub: 'lost items',
	},
];
