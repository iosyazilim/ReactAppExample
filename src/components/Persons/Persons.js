import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromProps');
  //     return state;
  //   }

  //   componentWillReceiveProps(props) {
  //     console.log('[Persons.js] componentWillReceiveProps', props);
  //   }

  /*  ShouldComponentUpdate kullanmak yerine bu componentı pure component yapıyoruz.
  *   Peki neden yapıyoruz? Çünkü pure component bizim shouldComponentUpdate de yaptığımız
  *   kontrolleri kendi yapıyor props ları karşılaştırıyor state leri karşılaştırıyor.
  */
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons){
  //     return true;
  //   }
  //   return false;
  // }

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

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
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
