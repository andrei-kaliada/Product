import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './index.scss'
import { AboutPageAsync } from './pages/About/AboutPage.async'
import { MainPageAsync } from './pages/Main/MainPage.async'

const App = () => {
	return (
		<div className='app'>
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
