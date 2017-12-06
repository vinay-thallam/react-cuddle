import React from 'react'

const Nested = () => <Button>I <Heart/> React</Button>

const Button = (props) => <button>{props.children}</button>

const Heart = () => <span>&hearts;</span>

export default Nested