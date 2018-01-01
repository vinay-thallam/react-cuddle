import React from 'react'
import ReactDOM from 'react-dom'

/*
The React component lifecycle will allow you to update your components at runtime. 
This lesson will explore how to do that. componentWillReceiveProps gives us an opportunity 
to update state by reacting to a prop transition before the render() call is made. 
shouldComponentUpdate allows us to set conditions on when we should update a component 
so that we are not rendering constantly. componentDidUpdate lets us react to a component 
updating.

*/
class App extends React.Component {

  constructor(){
    super()
    this.state = {increasing : false}
  }
  update(){
    ReactDOM.render(<App val={this.props.val+1}/>, document.getElementById('root'))
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps')
    this.setState({increasing : nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.val % 5 === 0
  }
  render() {
    console.log(`increasing : ${this.state.increasing}`)
    return (
      <button onClick={this.update.bind(this)}>{this.props.val}</button>
      )
  }
  componentDidUpdate(prevProps, prevState){
    console.log(`prev props : ${prevProps.val}`)
  }
}

App.defaultProps = {
  val : 0
}

export default App