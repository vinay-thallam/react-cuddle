import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nested from './Nested';

ReactDOM.render(<App txt="this is prop txt"/>, document.getElementById('root'));
ReactDOM.render(<Nested />, document.getElementById('nested'));