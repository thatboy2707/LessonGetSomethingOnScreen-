import React from 'react';
import ReactDom from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//function Hola() {
    //return <div>Hola mis amigo</div>;

//function Greet() {
    //return <div>whats up man</div>;

// function Hello(props) {
//     return <div>whats up yall. {props.name}?</div>;

function HiFullName(props) {
    return <div>Hi {props.FirstName} {props.LastName} !!!</div>
}

//ReactDom.render(<Hola/>, document.querySelector('#root'));
//ReactDom.render (<Greet/>, document.querySelector('#root'));
// ReactDom.render (<Hello name="How are you all doing"/>, document.querySelector('#root'));
ReactDom.render(<HiFullName FirstName="Isaiah" LastName="Glaspie"/> , document.querySelector('#root'));



// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();
