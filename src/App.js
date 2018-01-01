import React from 'react'
import ReactDOM from 'react-dom'

class LifeCycle extends React.Component {

  constructor() {
    super()
    this.state = {
      val : 0
    }
  }

  update() {
    this.setState({val : this.state.val+1})
  }
  componentWillMount(){
    console.log("componentWillMount") //will be called only once
    this.setState({m : 2})
  }
  render() {
    console.log("render") //will be called whenever there is change in state
    return (
      <button onClick={this.update.bind(this)}>{this.state.val * this.state.m}</button>
      )
  }
  componentDidMount(){
    console.log("componentDidMount") //will be called only once
    console.log(ReactDOM.findDOMNode(this))   
    this.inc = window.setInterval(this.update.bind(this), 500)
  }

  componentWillUnmount(){
    console.log("componentWillUnMount") //will be called only once
    window.clearInterval(this.inc)
  }
}

class App extends React.Component {
  mount(){
    ReactDOM.render(<LifeCycle/>, document.getElementById('mount_point'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('mount_point'))
  }
  render(){
    return <div>
      <button onClick={this.mount}>Mount</button>
      <button onClick={this.unmount}>UnMount</button>
      <div id="mount_point"></div>
    </div>
  }
}

export default App