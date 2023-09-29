import OrderTable from '@/components/tables/Order';

export default function TradingPage() {
	return (
		<div className='w-4/5'>
			<div className=''>
				{/* order request with buy and sell */}
				{/* list of orders */}
				<div className=''>
					{/* buy info */}
					<div className='my-8'>
						<h2 className='mb-4 text-2xl font-semibold'>Buy Orders</h2>
						<OrderTable type='buy' />
					</div>
					{/* sell info */}
					<div className='my-8'>
						<h2 className='mb-4 text-2xl font-semibold'>Sell Orders</h2>
						<OrderTable type='sell' />
					</div>
				</div>
			</div>
		</div>
	);
}
