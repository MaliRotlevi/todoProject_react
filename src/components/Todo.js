import { updetaToDo } from '../store/actions';
import { connect } from "react-redux";

import {  delToDos } from '../store/actions';
import "./ToDos.css";
import { Button } from 'react-bootstrap';
const Todo = ({ myTodo,deleteFunc,...props }) => {
    return (
    <div id="myToDo">
        <p>קוד משימה:  {myTodo.id}</p>
        <p>תוכן משימה:  {myTodo.title}</p>
        <input type="checkbox" defaultChecked={myTodo.completed}   onChange={()=>props.updetaToDo(myTodo)} />  בוצעה/לא בוצעה
        <br/>
        <Button style={{fontSize:"80%",margin:"3%",backgroundColor:"rgb(83, 57, 8)"}}   onClick={()=>{props.delToDos(myTodo);}}>מחק משימה </Button>


    </div>);
}
export default connect(null, {updetaToDo,delToDos})(Todo);
