import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      txt : "this is state text",
      cat : 0,
      currentEvent : "---"
    }
    this.updateCurrentEvent = this.updateCurrentEvent.bind(this)
  }

  update(e) {
    this.setState({txt : e.target.value})
  }
  updateCurrentEvent(e){
   this.setState({currentEvent : e.type}) 
  }
  render() {
    return (
      <div>
        <Title txt="1234"/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <hr/>
        <textarea
          onKeyPress = {this.updateCurrentEvent}
          onCopy = {this.updateCurrentEvent}
          onCut = {this.updateCurrentEvent}
          onPaste = {this.updateCurrentEvent}
          onFocus = {this.updateCurrentEvent}
          onBlur = {this.updateCurrentEvent}
          onDoubleClick = {this.updateCurrentEvent}
          onTouchStart = {this.updateCurrentEvent}
          onTouchMove = {this.updateCurrentEvent}
          onTouchEnd = {this.updateCurrentEvent}
          cols="30"
          rows="20">
        </textarea>
        <div>{this.state.currentEvent}</div>
      </div>
      )
  }
}

const Widget = (props) => <input type="text" onChange={props.update} />

const Title = (props) => <h1>{props.txt}</h1>

Title.PropTypes = {
  txt(props, propName, component){
    if(!(propName in props)){
      return new Error(`Missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} too short`)
    }
  }
}

export default App