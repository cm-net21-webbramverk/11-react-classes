import { useState } from 'react'

const Counter = () => {
	const [value, setValue] = useState(1)

	const handleClick = () => setValue(value + 1)

	return (
		<section>
			<h3> Counter, functional component </h3>
			<p>The value is: {value}.</p>
			<button onClick={handleClick}> Increase </button>
		</section>
	)
}

export default Counter
