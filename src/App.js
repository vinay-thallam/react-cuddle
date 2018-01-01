import React from 'react'
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      a : "this is initial text of a",
      b : "this is initial text of b"
    }
  }

  update(e) {
    this.setState({
      a : ReactDOM.findDOMNode(this.a).value,
      b : this.refs.b.value
    })
  }
  render() {
    return (
      <div>
        <Input ref={component => this.a = component} update={this.update.bind(this)}/>
        <h1>{this.state.a}</h1>
        <input ref="b" type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.b}</h1>
      </div>
      )
  }
}

class Input extends React.Component {
  render(){
    return <input type="text" onChange={this.props.update}/>
  }
}

export default App