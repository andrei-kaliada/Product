import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/About/AboutPage.async'
import { MainPageAsync } from './pages/Main/MainPage.async'
import './styles/index.scss'
import useTheme from './theme/useTheme'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />} />
					<Route path='/about' element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
