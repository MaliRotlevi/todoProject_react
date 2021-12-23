// import"./Style.css";
const HistotyToDo = ({ myTodo }) => {
    return (<>
        <div style={{fontFamily:"fantasy",fontSize:"140%",marginTop:"1.5%"}}>{myTodo.id}</div>
        <div style={{fontSize:"170%"}}>{myTodo.title}</div>
        <input style={{width: "20px",height:"20px",marginTop:"0.5%"}} type="checkbox" defaultChecked={myTodo.completed}/>
    </>);
}
export default HistotyToDo;
