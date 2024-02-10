type Model = Record<string, string | boolean>

export const classNames = (cls: string, model: Model, args: string[]) => {
	return [
		cls,
		...args,
		...Object.entries(model)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ')
}
