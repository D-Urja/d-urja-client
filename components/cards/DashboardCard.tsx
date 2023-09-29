export default function DashboardCard({
	title,
	color,
	unit,
	stats,
}: {
	title: string;
	color: string;
	unit: string;
	stats: number;
}) {
	return (
		<div>
			<div
				className={`flex flex-col p-8 my-6 mr-6 ${color} rounded-lg w-72 text-gray-50`}
			>
				<h2 className='text-xl font-semibold'>{title}</h2>
				<div className='flex pt-2'>
					<p className='text-2xl font-semibold'>
						{stats}
						<span className='text-base font-semibold'> {unit}</span>
					</p>
				</div>
			</div>
		</div>
	);
}
