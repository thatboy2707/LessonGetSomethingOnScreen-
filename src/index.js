import React from 'react';
import ReactDom from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

function Hola() {
    return <div>Hola mis amigo</div>;
}

ReactDom.render(<Hola/>, document.querySelector('#root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();
