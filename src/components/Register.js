import { connect } from "react-redux";
import { getAllUser, addUser } from '../store/actions';
import React, { useState } from 'react';
import Dialoge from "./Dialoge";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";


const Register = (props) => {



  const [userRegiser, setUserRegiser] = useState({ name: null, email: null, city: null, street: null, phone: null });
  const inputRefName = React.createRef();
  const inputRefEmail = React.createRef();
  const inputRefCity = React.createRef();
  const inputRefStreet = React.createRef();
  const inputRefPhone = React.createRef();
  // const [userNameError, setUserNameError] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [mailError, setMailError] = useState(" ");
  const [PhoneError, setPhoneError] = useState(" ");

  const [showResults, setShowResults] =useState(false)
  const updateName = () => {
    const inputText = inputRefName.current.value
    setUserRegiser({
      ...userRegiser,
      name: inputText
    });
  }
  const updateCity = () => {
    const inputText = inputRefCity.current.value
    setUserRegiser({
      ...userRegiser,
      city: inputText
    });
  }
  const updateEmail = () => {
    const inputText = inputRefEmail.current.value

    setUserRegiser({
      ...userRegiser,
      email: inputText
    });
  }
  const updateStreet = () => {
    const inputText = inputRefStreet.current.value;
    setUserRegiser({
      ...userRegiser,
      street: inputText
    });
  }
  const updatePhone = () => {
    const inputText = inputRefPhone.current.value;

    setUserRegiser(
      {
        ...userRegiser,
        phone: inputText
      });

  }

    return (<>
    <h1 style={{fontSize:"320%",color:"rgb(83, 57, 8)"}}>הרשמה :</h1>
    <Form.Control style={{fontSize: "115%",width:"33%",marginBottom:"0px",marginRight:"34%"}} ref={inputRefName} placeholder="שם משתמש" type="text" onKeyUp={updateName}/>
      <br />
      <Form.Control style={{fontSize: "115%",width:"33%",marginBottom:"0px",marginRight:"34%"}} ref={inputRefCity} placeholder="עיר" type="text" onKeyUp={updateCity}/>
      <br />
      <Form.Control style={{fontSize: "115%",width:"33%",marginBottom:"0px",marginRight:"34%"}} ref={inputRefStreet} placeholder="רחוב" type="text" onKeyUp={updateStreet}/>
      <br />
      <Form.Control style={{fontSize: "115%",width:"33%",marginBottom:"0px",marginRight:"34%"}} ref={inputRefEmail}  className="erorr"  placeholder="מייל" type="mail" onKeyUp={updateEmail} onChange={(e) => {
        setMailError(RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(e.target.value)?"":"מייל לא תקין!")
      }}/> {mailError!==""? <p>{mailError}</p>:""}
      <br />
      <Form.Control style={{fontSize: "115%",width:"33%",marginRight:"34%"}} ref={inputRefPhone} className="erorr" placeholder="טלפון" type="text" onKeyUp={updatePhone}   onChange={(e) => {
        setPhoneError(RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(e.target.value)&&e.target.value>8?"":"טלפון לא תקין!")
      }}/>  {PhoneError!==""? <p>{PhoneError}</p>:""}
      <br />
      <Form.Control style={{fontSize: "115%",width:"33%",marginRight:"34%"}} type="text" placeholder="lng" value={lng} disabled={true}/>
      <br />
      <Form.Control style={{fontSize: "115%",width:"33%",marginRight:"34%"}} type="text" placeholder="lat" value={lat}  disabled={true}/>
      <br />
      <Button style={{fontSize:"150%",margin:"1%",backgroundColor:"rgb(83, 57, 8)"}} onClick={()=>{
      navigator.geolocation.getCurrentPosition((success)=>{console.log(success)
      setLat( success.coords.latitude)
      setLng( success.coords.longitude)
      });

      }}>קבלת מיקום גאוגרפי</Button>
 <br />
      
      <br />
      
      <Button style={{fontSize:"200%",margin:"1%",backgroundColor:"rgb(83, 57, 8)"}}   disabled={(mailError!==""||PhoneError!==""||PhoneError==" "||mailError==" ")?true:false} onClick={() => { setShowResults(true); props.addUser(userRegiser) } }>הירשם</Button>
       {showResults && <Dialoge  />} 
    
    </>);
  
 
}
const mapStateToProps = (state) => {
  return {
    currentUser: null,
  }
}

export default connect(mapStateToProps, { getAllUser, addUser })(Register);
