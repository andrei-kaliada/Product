import { classNames } from 'shared/lib/classNames/classNames'
import Navbar from 'widgets/Navbar'
import AppRouter from './providers/routes'
import { useTheme } from './providers/theme'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', { hover: true }, [theme])}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleTheme}>Toggle theme</button>
		</div>
	)
}

export default App
