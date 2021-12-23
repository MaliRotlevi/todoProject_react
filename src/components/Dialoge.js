import { Redirect } from "react-router-dom";
import React, { useState } from 'react';
import Todos from "./Todos";
import {  Message } from 'semantic-ui-react'
import Button from 'react-bootstrap/Button';

const Dialoge = () => {
    let [nextToDo,setNextToDo]=useState(false);

    return ( <>
    <h1 style={{direction:"rtl"}}>נוספת בהצלחה!!!</h1>
    <Message 
      success
      header='נוספת בהצלחה!!!'
      content="המשתמש התוסף למאגר"
    />
    <Button style={{fontSize:"150%",margin:"1%",backgroundColor:"rgb(83, 57, 8)"}}  onClick={()=>setNextToDo(true)}>אישור</Button>
    {nextToDo &&<Redirect to="/todo" />}
    </> );}
    
// }

export default Dialoge;