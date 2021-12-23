import { connect } from "react-redux";
import React, { useState } from 'react';
import { logUser, getToDos, getAllUser, saveUser } from '../store/actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from "react-router-dom";
import Todos from "./Todos";
import "./Login.css";

const Login = (props) => {
  const [goodUser, setGoodUser] = useState(false);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const inputRef = React.createRef()
  const inputRefMail = React.createRef()

  const updateName = () => {
    const inputText = inputRef.current.value
    setName(inputText)
    console.log(inputText)
  }


  const updateMail = () => {
    const inputTextMail = inputRefMail.current.value
    setMail(inputTextMail)
    console.log(inputTextMail)
  }

  const log = () => {
    if (props.currentUser == null) {
      setGoodUser(true);

    }
    else
      setGoodUser(false);
  }
  if (props.currentUser)
    return <Todos />
  else
  return (<>
    <h1 style={{ fontSize: "300%",color:"rgb(83, 57, 8)"}}>התחברות:</h1>
    <Form.Control style={{fontSize: "115%",width:"33%",marginRight:"34%"}} ref={inputRef} placeholder="שם משתמש" onKeyUp={updateName} className="dd"/><br />
    <Form.Control style={{fontSize: "115%",width:"33%",marginRight:"34%"}} type="mail" ref={inputRefMail} placeholder="מייל" onKeyUp={updateMail}/>
    <br />
    
    <br />

    <Button  style={{fontSize:"200%",margin:"1%",backgroundColor:"rgb(83, 57, 8)"}} onClick={() => {
      props.logUser({ username: name, email: mail });
      log();
      console.log(props.listUser.length)
      if (props.listUser.length !== 0 && props.listUser[0].name == name && props.listUser[0].email == mail)
        props.saveUser(props.listUser[0])
    }}>כניסה</Button>

 

    

  </>);



}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    listUser: state.user.listUser
    // currentErorer: state.error
  }
}

export default connect(mapStateToProps, { logUser, getToDos, getAllUser, saveUser })(Login);