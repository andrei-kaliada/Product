import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { buildPath, envOptions } from './config/build/types/config'

export default (env: envOptions) => {
	const paths: buildPath = {
		entry: path.resolve(__dirname, './src/index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const mode = env.mode || 'development'

	const isDev = mode === 'development'

	const PORT = env.port || 3000

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		src: paths.src,
	})

	return config
}
