import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'

function App() {
	return (
		<div>
			<Counter/>
			<CounterClass/>
		</div>
	)
}

export default App
