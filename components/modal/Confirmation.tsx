export default function ConfirmationModal({ type }: { type: 'buy' | 'sell' }) {
	return (
		<div className='absolute top-0 right-0 z-10 w-full h-full bg-red-500'>
			<div>{type}</div>
		</div>
	);
}
