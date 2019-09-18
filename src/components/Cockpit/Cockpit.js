import React, { useEffect, Fragment, useRef } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null) //React.createRef(); yerine useRef() kullandık. çünkü functional component.
  

  useEffect(() =>{
    console.log('[Cockpit.js] useEffect');
    //Http request you can do that
    // setTimeout(()=> {
    //  alert('Saved data to cloud!')
    // }, 1000);
    toggleButtonRef.current.click();
    return () => { console.log('[Cockpit.js] cleanup work in useEffect')};
  },[]); //istediğin props ile control edebilirsin props değiştiğinde çalışır yada boş array verirsen sadece birkez çalışır.
  
  //İkinci bir useEffect tanımlayıp onunda istediğin yerde çalışmasını sağlayabilirsin.
  
    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
    });
  const assignedClasses = [];
  let btnClass = "";

  if(props.showPerson){
    btnClass = classes.red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <Fragment>
        <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
    </Fragment>

  );
};

export default React.memo(Cockpit);
