'use client';

import classNames from '@/utils/classNames';

const buyOrders = [
	{
		id: 1,
		energy: 100,
		type: 'buy',
		price: 10,
		energyType: 'coal',
		carbonCredits: '+10',
		token: 10,
		user: 'user1',
	},
	{
		id: 2,
		energy: 100,
		type: 'buy',
		price: 12,
		energyType: 'hydro',
		carbonCredits: '+8',
		token: 10,
		user: 'user2',
	},
	{
		id: 3,
		energy: 100,
		type: 'buy',
		price: 10,
		energyType: 'solar',
		carbonCredits: '+10',
		token: 10,
		user: 'user3',
	},
];

export default function OrderTable({ type }: { type: 'buy' | 'sell' }) {
	return (
		<div className='p-1'>
			<div className='overflow-y-scroll ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg'>
				<table className='min-w-full divide-y divide-gray-300'>
					{/* table head */}
					<thead className='text-center'>
						<tr>
							<th
								scope='col'
								className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
							>
								TYPE
							</th>
							<th
								scope='col'
								className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'
							>
								USER
							</th>
							<th
								scope='col'
								className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'
							>
								CARBON CREDITS
							</th>
							<th
								scope='col'
								className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'
							>
								QUANTITY
							</th>
							<th
								scope='col'
								className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
							>
								PRICE/KWH
							</th>
							<th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
								<span className='sr-only'>Action</span>
							</th>
						</tr>
					</thead>
					{/* end of thead */}
					<tbody>
						{buyOrders.map((order, orderIdx) => (
							// table pattern (type, energy, carbon credits, quantity, price, action)
							<tr key={order.id}>
								<td
									className={classNames(
										orderIdx === 0 ? '' : 'border-t border-transparent',
										'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
									)}
								>
									<div className='font-medium text-gray-900'>
										{order.energyType.toUpperCase()}
									</div>
									<div className='flex flex-col mt-1 text-gray-500 sm:block lg:hidden'>
										<span>{order.energyType.toUpperCase()}</span>
									</div>
									{orderIdx !== 0 ? (
										<div className='absolute right-0 h-px bg-gray-200 left-6 -top-px' />
									) : null}
								</td>
								<td
									className={classNames(
										orderIdx === 0 ? '' : 'border-t border-gray-200',
										'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
									)}
								>
									{order.user}
								</td>
								<td
									className={classNames(
										orderIdx === 0 ? '' : 'border-t border-gray-200',
										'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
									)}
								>
									{order.carbonCredits}
								</td>
								<td
									className={classNames(
										orderIdx === 0 ? '' : 'border-t border-gray-200',
										'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
									)}
								>
									{order.energy} kWh
								</td>
								<td
									className={classNames(
										orderIdx === 0 ? '' : 'border-t border-gray-200',
										'px-3 py-3.5 text-sm text-gray-500'
									)}
								>
									<div className='sm:hidden'>{order.price}</div>
									<div className='hidden sm:block'>{order.price}</div>
								</td>
								<td
									className={classNames(
										orderIdx === 0 ? '' : 'border-t border-transparent',
										'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
									)}
								>
									<button
										type='button'
										className={classNames(
											type === 'buy' ? 'buy-btn' : 'sell-btn'
										)}
									>
										{type.toUpperCase()}
										<span className='sr-only'>{type}</span>
									</button>
									{orderIdx !== 0 ? (
										<div className='absolute left-0 h-px bg-gray-200 right-6 -top-px' />
									) : null}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
