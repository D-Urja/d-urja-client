import WebSocket from '@/components/socket/WebSocket';

export default function Home() {
	return (
		<div className='w-4/5 mt-8'>
			<WebSocket />
			<h1>Homepage</h1>
		</div>
	);
}
