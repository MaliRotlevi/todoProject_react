import { connect } from "react-redux";
import React, { useState }  from 'react';
import Todo from "./Todo";
import {  delToDos} from '../store/actions';
import AddToDo from "./AddToDo";
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

// import"./ToDos.css";
const Todos = (props) => {
    const selector = useSelector((state) => state.todo);
    let toDoList = selector.todoList.filter((item)=>{return item.completed===false})

    const [showAdd, setShowAdd] = useState(false);
    return (  <> <h1 style={{fontFamily:"fantasy",fontSize:"285%"}}> המשימות שלא בוצעו:</h1>{toDoList.map((item)=>{return <Todo key={item.id} myTodo={item} deleteFunc={props.delToDos}  style={{border:"2px  solid blue"}}/>})}
<br/>
    <Button style={{fontSize:"200%",margin:"1%",backgroundColor:"rgb(83, 57, 8)"}}   onClick={()=>{setShowAdd(true)}}>הוספת משימה</Button>
    {showAdd&&<AddToDo  setShow={setShowAdd}/>}
    </>);

}
const mapStateToProps = (state) => {
    return {
        arr: state.todo.todoList.filter((item)=>{return item.completed===false})
    }
}
export default connect(mapStateToProps,{delToDos})(Todos);