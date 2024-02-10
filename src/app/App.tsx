import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from './providers/routes'
import { useTheme } from './providers/theme'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', { hover: true }, [theme])}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>
			<AppRouter />
		</div>
	)
}

export default App
