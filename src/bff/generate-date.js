export const generateDate = () => newDate(Math.random() * 1000000000000 + 1999999999999)
	.toISOSString()
	.substring(0, 16)
	.replace('T', ' ')
