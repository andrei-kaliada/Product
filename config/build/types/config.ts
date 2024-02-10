export type buildMode = 'development' | 'production'

export interface buildPath {
	entry: string
	build: string
	html: string
	src: string
}

export interface buildOptions {
	mode: buildMode
	paths: buildPath
	isDev: boolean
	port: number
	src: string
}

export interface envOptions {
	port: number
	mode: buildMode
}
