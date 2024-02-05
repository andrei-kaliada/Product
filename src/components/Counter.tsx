import { useState } from 'react'
import styles from './Counter.module.scss'

const Counter = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<p>{count}</p>
			<button className={styles.btn} onClick={() => setCount(count + 1)}>
				Increment
			</button>
		</div>
	)
}

export default Counter
