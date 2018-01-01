import React from 'react'


class Demo extends React.Component {

	render(){
		return (
			<div>
				<Button> Click here 3</Button>
				<hr/>
				<LabelHOC>Label text</LabelHOC>
			</div>
		)
	}
}

const HOC = (InnerComponent) => class HOC extends React.Component {

	constructor() {
		super()

		this.state = {
			count : 0
		}
		this.update = this.update.bind(this)
	}

	update(e) {
		console.log('updating..')
		this.setState({count : this.state.count+1})
	}
	componentWillMount() {
		console.log('componentWillMount')
	}
	render() {
		return <InnerComponent 
		{...this.props}
		{...this.state}
		update={this.update}/>
	}
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component {
	componentWillMount() {
		console.log('Label will mount')
	}
	render() {
		return (
			<label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
		)
	}	
}

const LabelHOC = HOC(Label)

export default Demo