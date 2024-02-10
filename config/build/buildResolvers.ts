import webpack from 'webpack'
import { buildOptions } from './types/config'

export function buildResolvers(options: buildOptions): webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [options.src, 'node_modules'],
	}
}
