import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {

  render() {

    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt : PropTypes.PropTypes.string,
  cat : PropTypes.PropTypes.number
}

export default App