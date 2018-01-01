import React from 'react'

class StarWars extends React.Component {

	constructor(){
		super()
		this.state = {
			items : []
		}
	}
	componentWillMount(){
		fetch('https://swapi.co/api/people/?format=json')
		.then(response => response.json())
		.then(function(data){
			this.setState({items : data.results})
		}.bind(this))
		// .then(({results : items}) => this.setState(items))
	}
	render(){
		let items = this.state.items

		return (
			<div>
				{items.map(item => <Person key={item.name} person={item}/>)}
			</div>
			)
	}
}

const Person = (props) => <h4>{props.person.name}</h4>

export default StarWars