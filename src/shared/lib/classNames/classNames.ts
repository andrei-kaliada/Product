type Model = Record<string, string | boolean>

export const classNames = (cls: string, model?: Model, args?: string[]) => {
	return [
		cls,
		...args.filter(Boolean),
		...Object.entries(model)
			.filter(([value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ')
}
