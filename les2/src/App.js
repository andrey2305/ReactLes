import React, { Component } from 'react';
import './App.css';


import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <h1>Hello World!!!</h1>
            <FieldToForm id="name" name="Your name:" type="text" placeholder="Carl"/>
            <FieldToForm id="surname" name="Your surname:" type="text" placeholder="Garsia"/>
            <FieldToForm id="age" name="Your age:" type="number" placeholder="21"/>
            <FieldToForm id="submit" type="submit" value="Send"/>
        </div>
    );
  }
}

function FieldToForm(props) {
    return (
        <div className="input">
            <label htmlFor={props.id}>{props.name} </label>
            <input id={props.id} type={props.type} placeholder={props.placeholder} value={props.value} />
        </div>
    )
}

export default App;
