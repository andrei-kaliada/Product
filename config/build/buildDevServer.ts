import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { buildOptions } from './types/config'

export function buildDevServer({
	paths,
	port,
}: buildOptions): DevServerConfiguration {
	return {
		static: {
			directory: paths.build,
		},
		compress: true,
		open: true,
		port,
		historyApiFallback: true,
	}
}
