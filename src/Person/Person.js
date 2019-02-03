import React from 'react';
import './Person.css';

const person = (props) => {
    return(
    <div className='Person'>
    <h3>Person Functional Component</h3>
    <p onClick={props.click}>I'm a {props.name}! I am {props.job}.</p>
    <input type='text' value={props.name} onChange={props.changeName} />
    {props.children}
    </div>
    );
};

export default person;