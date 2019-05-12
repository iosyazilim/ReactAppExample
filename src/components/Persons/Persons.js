import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromProps');
  //     return state;
  //   }

  //   componentWillReceiveProps(props) {
  //     console.log('[Persons.js] componentWillReceiveProps', props);
  //   }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js]  getSnapshotBeforeUpdate', prevProps);
    return { message: 'Snaphot Alındı' };
  }

//   componentWillUpdate(){

//   }
  componentDidUpdate(prevProps, prevState, snaphot) {
    console.log('[Persons.js]  componentDidUpdate');
    console.log(snaphot);
  }
  render() {
    console.log('[Persons.js] Rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
