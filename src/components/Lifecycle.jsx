import { Component } from 'react'

class Lifecycle extends Component {
	state = {
		message: 'Default message',
		count: 12
	}

	componentDidMount() {
		this.setState({ message: 'Mounted' })
	}

	// I funktionell komponent:
	/*useEffect( (props, state) => {
		setMessage(`The old count was ${state.count}.`)
	}, [count] ) */
	componentDidUpdate(prevProps, prevState) {
		if( prevState.count !== this.state.count ) {
			this.setState({ message: `The old count was ${prevState.count}.` })
		}
	}

	handleClick = (event) => {
		this.setState({ count: this.state.count + 1 })
	}

	render() {
		return (
			<section>
				<h3> Lifecycle class component </h3>
				<p> {this.state.message} </p>
				<p> Value: {this.state.count}  <button onClick={this.handleClick}> +1 </button> </p>
			</section>
		)
	}
}

export default Lifecycle
