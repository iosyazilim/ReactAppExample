import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {id:'flak1', name: "Ercan", job: "Engineer" },
      {id:'flak2', name: "Hande", job: "Dentist" },
      {id:'flak3', name: "Erkan", job: "Photographer" }
    ],
    showPersons: false
  };


  nameChangedHandler = (event, id) => {
    const personIndex  = this.state.persons.findIndex(p => {
      return  p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({persons: newPersons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "9px",
      fontWeight: "bold",
      cursor: "pointer"
    };

    let persons = false;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
           click={this.deletePersonHandler.bind(this, index)}
           name={person.name} 
           job={person.job}
           changeName={(event) => this.nameChangedHandler(event, person.id)}
           key={person.id} //objemizdeki listemizin her zaman id si olmaya bilir ozaman key= index i veririz.
           />
        })}
         
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
