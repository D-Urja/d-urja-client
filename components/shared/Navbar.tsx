'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

const navItems = [
	{ name: 'Home', href: '/' },
	{ name: 'Trading', href: '/trading' },
	{ name: 'About', href: '/about' },
];

export default function Navbar() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<nav className='flex items-center justify-between h-16 shadow-sm'>
			{/* logo */}
			<div className='flex'>
				<div className='w-32 h-32 p-6'>
					<Link href={'/'}>
						<Image
							src='/images/d-urja.png'
							alt='d-urja logo'
							width={500}
							height={500}
							title='D-Urja'
						/>
					</Link>
				</div>
			</div>
			{/* list of nav items */}
			<ul className='flex mr-4'>
				{navItems.map(({ name, href }) => (
					<Link key={name} href={href}>
						<li className='px-4 py-2 mx-1 rounded-lg hover:bg-gray-200'>
							{name}
						</li>
					</Link>
				))}
				<Link
					className='px-4 py-2 mx-1 text-white bg-green-500 rounded-lg hover:bg-green-600'
					href={isLoggedIn ? '/user' : '/login'}
				>
					Login
				</Link>
				<Link
					className='px-4 py-2 mx-1 rounded-lg hover:bg-gray-200'
					href={isLoggedIn ? '/dashboard' : '/signup'}
				>
					{isLoggedIn ? 'Dashboard' : 'Sign up'}
				</Link>
			</ul>
		</nav>
	);
}
