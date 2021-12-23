import { connect } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Todos from './Todos';
import History from './History';
import { logOutUser,logOutToDos} from '../store/actions';
import AddToDo from "./AddToDo";
import {  Route, Switch,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav,NavItem} from 'react-bootstrap';
import { Button, Form, Message } from 'semantic-ui-react'
import './App.css';
function App(props) {
  return (
    <>
 <Navbar  bg="dark" variant="dark"  >
 <Navbar.Collapse id="basic-navbar-nav">
  <NavItem>
  {!props.currentUser&&<Link to="/login" style={{marginLeft:20,fontSize: "25px",color:"white"}}>התחבר
          </Link>}
  </NavItem>
          {!props.currentUser&&<Link to="/Register" style={{marginLeft:20,fontSize: "28px",color:"white"}}>הרשם
  
  </Link>}
  {props.currentUser&&  <Link to="/todo" style={{marginLeft:20,fontSize: "25px",color:"white"}}>המשימות שלי</Link>}   
      

  {props.currentUser&&  <Link to="/history" style={{marginLeft:20,fontSize: "25px",color:"white"}}>היסטורית המשמות שלי
  
  </Link>}   
  {props.currentUser&&  <Link  to="/addToDo" style={{marginLeft:20,fontSize: "25px",color:"white"}}>הוספת משימה
  </Link>}   
  {props.currentUser&&  <Link to="/exit" style={{marginLeft:20,fontSize: "25px",color:"white"}} onClick={()=>{
    props.logOutUser(null);
    props.logOutToDos([]); }
    }>יציאה
  </Link>}    
       
  </Navbar.Collapse>
 </Navbar >
      <Switch>
      <Route path="/login">
        <Login  />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/todo">
        <Todos />
      </Route>

      <Route path="/history">
        <History />
      </Route>
      <Route path="/addToDo">
        <AddToDo setShow={setShowAdd} />
      </Route>
       <Route exact path="/exit">
       <Message
      warning
      header='ההתנתקות בוצעה בהצלחה!'
      list={[
        '',
      ]}
    />
      </Route>
      <Route exact path="">
        <Login/>
      </Route>
     </Switch> 

     
    </>

    
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
 
  }
}

const setShowAdd=()=>{}
export default connect(mapStateToProps,{logOutUser,logOutToDos})(App);
