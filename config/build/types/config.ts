export type buildMode = 'development' | 'production'

export interface buildPath {
	entry: string
	build: string
	html: string
}

export interface buildOptions {
	mode: buildMode
	paths: buildPath
	isDev: boolean
	port: number
}

export interface envOptions {
	port: number
	mode: buildMode
}
