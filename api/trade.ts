export function createBuy() {
	return {
		type: 'BUY',
		payload: {
			amount: 100,
			price: 10,
		},
	};
}
