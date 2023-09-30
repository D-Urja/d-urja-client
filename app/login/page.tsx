export default function LoginPage() {
	return (
		<div className='p-8 border border-gray-300 rounded-lg'>
			<form className='flex flex-col'>
				<div className='flex flex-col'>
					<label className='' htmlFor='username'>
						Username
					</label>
					<input
						className='border border-gray-300 rounded-md pd'
						type='text'
						placeholder='username'
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='password'>Password</label>
					<input type='password' placeholder='password' />
				</div>
				<div>
					<button type='submit'>Login</button>
				</div>
			</form>
		</div>
	);
}
