
export const debounce = (fn, dalay) => {
	let timeoutId
	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(fn, dalay, ...args)
		//setTimeout(() => fn(...args), dalay)
	}
}
