'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import DashboardCard from '@/components/cards/DashboardCard';

const user = {
	username: 'TheManysh',
	firstname: 'Manish',
	lastname: 'Shivabhakti',
	profilePic: '/images/home.png',
};

const userStats = [
	{
		unit: 'trades',
		stats: 100,
		color: 'bg-green-500',
		title: 'Total Trades',
	},
	{
		unit: 'kWh',
		stats: 100,
		color: 'bg-red-500',
		title: 'Solar Energy',
	},
	{
		unit: 'kWh',
		stats: 100,
		color: 'bg-violet-500',
		title: 'Wind Energy',
	},
	{
		unit: 'kWh',
		stats: 100,
		color: 'bg-red-500',
		title: 'Energy Consumed',
	},
	{
		unit: 'kWh',
		stats: 100,
		color: 'bg-green-500',
		title: 'Energy Produced',
	},
	{
		unit: 'kWh',
		stats: 100,
		color: 'bg-blue-500',
		title: 'Energy Stored',
	},
	{
		unit: 'kWh',
		stats: 100,
		color: 'bg-yellow-500',
		title: 'Energy Sold',
	},
	{
		unit: 'credits',
		stats: 100,
		color: 'bg-indigo-500',
		title: 'Carbon Credits',
	},
];

export default function UserPage() {
	const params = useParams();
	return (
		<div className='flex flex-col items-center w-full mt-8'>
			<div className='w-4/5'>
				{/* user profile */}
				<div className='flex'>
					<div className='overflow-hidden border border-gray-300 rounded-full'>
						<Image
							src={'/images/home.png' || user.profilePic}
							alt=''
							width={200}
							height={200}
						/>
					</div>
					<div className='ml-8'>
						<h2 className='text-3xl font-semibold'>
							{user.firstname}&apos;s Home
						</h2>
						<p className='mt-2 font-semibold text-gray-500'>@{user.username}</p>
					</div>
				</div>
				{/* user stats */}
				<div className='mt-8'>
					<h2 className='text-3xl font-semibold'>User Stats</h2>
				</div>
				<div className='flex flex-wrap justify-between'>
					{/* bunch of cards */}
					{userStats.map((stat) => (
						<DashboardCard
							title={stat.title}
							color={stat.color}
							stats={stat.stats}
							unit={stat.unit}
							key={stat.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
