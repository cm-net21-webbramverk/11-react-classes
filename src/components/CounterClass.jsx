import { Component } from 'react'

class CounterClass extends Component {
	constructor(props) {
		// C#: base(props);
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	
	state = {
		value: 1
	}

	handleClick(event) {
		// console.log('Vad är this? ', this)
		this.setState({ value: this.state.value + 1 })
	}

	render() {
		return (
			<section>
				<h3> Counter, class component </h3>
				<p>The value is: {this.state.value}.</p>
				<button onClick={this.handleClick}> Increase</button>
			</section>
		)
	}
}

export default CounterClass
