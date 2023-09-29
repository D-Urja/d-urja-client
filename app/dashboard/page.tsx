import DashboardCard from '@/components/cards/DashboardCard';

export default function DashboardPage() {
	const dashboardNav = [
		{
			title: 'Energy Produced',
			stats: 100,
			unit: 'kWh',
			color: 'bg-green-500',
		},
		{ title: 'Energy Consumed', stats: 50, unit: 'kWh', color: 'bg-red-500' },
		{ title: 'Energy Stored', stats: 901, unit: 'kWh', color: 'bg-blue-500' },
		{ title: 'Energy Sold', stats: 50, unit: 'kWh', color: 'bg-yellow-500' },
		{
			title: 'Carbon Credits',
			stats: 144,
			unit: 'credits',
			color: 'bg-indigo-500',
		},
		{
			title: 'Token Earned',
			stats: 1700,
			unit: 'URJA',
			color: 'bg-pink-500',
		},
	];
	return (
		<div className='flex flex-col items-center'>
			<div className='w-4/5'>
				<h1 className='my-4 mt-8 text-3xl font-semibold'>Dashboard</h1>
				<div className='flex flex-wrap justify-around item-center'>
					{/* creating card for the dashboard */}
					{dashboardNav.map((nav) => (
						<DashboardCard
							key={nav.title}
							title={nav.title}
							color={nav.color}
							stats={nav.stats}
							unit={nav.unit}
						/>
					))}
				</div>
				<h1 className='my-4 mt-8 text-3xl font-semibold'>Charts</h1>
				<div></div>
			</div>
		</div>
	);
}
