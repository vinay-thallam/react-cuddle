import React from 'react'

class App extends React.Component {

  render() {

    // This will not work in react. Render method in class component is allowed to return only one node.
    //return <h1>Hello Vinay</h1> <b>bold</b> 

    //Wrap multile JSX nodes in a parent div
    return (
      <div>
        <h1>Hello Vinay</h1>
        <b>bold</b>
      </div>
      )
  }
}

export default App