import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nested from './Nested';
import StarWars from './StarWars';
import Demo from './hoc';

ReactDOM.render(<App txt="this is prop txt"/>, document.getElementById('root'));
ReactDOM.render(<Nested />, document.getElementById('nested'));
ReactDOM.render(<StarWars />, document.getElementById('starwars'));
ReactDOM.render(<Demo />, document.getElementById('hoc'));