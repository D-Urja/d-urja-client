'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Signup() {
	const [toggleRelay, setToggleRelay] = useState(false);
	console.log(toggleRelay);
	return (
		<div>
			<h1>This is the register page</h1>
			{/* TODO: remove this */}
			<p>
				Go to <Link href={'/dashboard'}>Dashboard</Link>
			</p>
			<p>
				<button
					onClick={() => {
						setToggleRelay(!toggleRelay);
						console.log(toggleRelay);
					}}
				>
					Toggle Button
				</button>
			</p>
		</div>
	);
}
