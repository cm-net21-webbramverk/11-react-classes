import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import Lifecycle from './components/Lifecycle'

function App() {
	return (
		<div>
			<Lifecycle />
			<Counter/>
			<CounterClass/>
		</div>
	)
}

export default App
