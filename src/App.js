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
  }
  render() {
    console.log("render") //will be called whenever there is change in state
    return (
      <button onClick={this.update.bind(this)}>{this.state.val}</button>
      )
  }
  componentDidMount(){
    console.log("componentDidMount") //will be called only once
  }

  componentWillUnmount(){
    console.log("componentWillUnMount") //will be called only once
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