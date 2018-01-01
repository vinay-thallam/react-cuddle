import React from 'react'

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
      a : this.refs.a.value,
      b : this.refs.b.value
    })
  }
  render() {
    return (
      <div>
        <input ref="a" type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.a}</h1>
        <input ref="b" type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.b}</h1>
      </div>
      )
  }
}

export default App