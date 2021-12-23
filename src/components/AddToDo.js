import { addToDo,getAllUser } from '../store/actions';
import React, { useState } from 'react';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
// import"./Style.css";

const AddToDo = (props) => {
   
    const findMax = () => {
        if (props.myList.length!==0) {
            let max = Math.max.apply(Math, props.myList.map(function (o) { return o.id; }))
            return max + 1;
        }
        else
            return 1;

    }
    const [myTodo, setMyTodo] = useState({ "userId": props.currentUser, "id": findMax(), "title": null, "completed": false });
    const inputRefTohen = React.createRef();
    const updateTohen = () => {
        const inputText = inputRefTohen.current.value
        setMyTodo({
            ...myTodo,
            title: inputText,

        });

    }
    return (<>
        <div>
        <br/>
        <br/>
            <label style={{fontSize:"200%",marginTop:"2%"}}>:הזן תוכן המשימה</label>
            <br/>
            <br/>
            <input style={{width:"35%",fontSize:"135%"}} ref={inputRefTohen} type="text" onKeyUp={updateTohen} />
            <br/>
            <Button style={{fontSize:"180%",margin:"3%",backgroundColor:"rgb(83, 57, 8)"}}  onClick={() => { props.addToDo(myTodo); props.setShow(false); inputRefTohen.current.value="";}} >שמור</Button>
            <Button style={{fontSize:"180%",margin:"3%",backgroundColor:"rgb(83, 57, 8)"}}  onClick={() => { props.setShow(false) }} >ביטול</Button>

        </div>

    </>);
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        myList: state.todo.todoList.filter((item)=>{return item.completed===false})
    }
}

export default connect(mapStateToProps, { addToDo,getAllUser })(AddToDo);

