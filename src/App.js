import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      txt : "this is state text",
      cat : 0
    }
  }

  update(e) {
    this.setState({txt : e.target.value})
  }
  render() {
    return (
      <div>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
      )
  }
}

const Widget = (props) => <input type="text" onChange={props.update} />

export default App