'use client';

import { useEffect, useMemo } from 'react';

export default function WebSocketComponent() {
	const socket = useMemo(() => new WebSocket('ws://192.168.100.199:81'), []);

	useEffect(() => {
		console.log(socket);
		socket.addEventListener('open', (event) => {
			console.log('WebSocket connection opened:', event);
		});

		socket.addEventListener('message', (event) => {
			console.log('WebSocket message received:', event.data);
		});

		socket.addEventListener('close', (event) => {
			console.log('WebSocket connection closed:', event);
		});

		return () => {
			socket.close();
		};
	}, [socket]);

	const turnOn = () => {
		socket.send('relay1_on');
	};

	const turnOff = () => {
		socket.send('relay1_off');
	};

	return (
		<div>
			<h1>WebSocket</h1>
			<button onClick={turnOn}>Turn On</button>
			<button onClick={turnOff}>Turn Off</button>
		</div>
	);
}
