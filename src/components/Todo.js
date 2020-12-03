import React from "react";

const Todo = (props) => {
    const toBinHandler = (e) => {
        let tempTodo = [ ...props.todo ];
        tempTodo.splice(props.index, 1);
        props.setTodo(tempTodo);
    }
    return (
    <div className="card">
        <div className="container">
            <span className="binCrossMark"><button onClick={toBinHandler}>X</button></span>
            <h4><b>{props.title}</b></h4>
            <hr/>
            <p>{props.description}</p>
        </div>
    </div>
)}

export default Todo;
