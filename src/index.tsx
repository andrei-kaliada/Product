import { ThemeProvider } from 'app/providers/theme'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
