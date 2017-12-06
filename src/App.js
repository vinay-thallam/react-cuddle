import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {

  render() {

    let txt = this.props.txt
    return <h1>{txt} - {this.props.cat}</h1>
  }
}

App.propTypes = {
  txt : PropTypes.PropTypes.string,
  cat : PropTypes.PropTypes.number.isRequired
}

App.defaultProps = {
  txt : "this is default text",
  cat : 100
}

export default App