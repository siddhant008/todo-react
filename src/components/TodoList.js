import React from "react";
//import components
import Todo from "./Todo";

const TodoList = (props) => {
    let a = props.todo.map( todo => (
            <Todo
                todo={props.todo} setTodo={props.setTodo}
                index={props.todo.indexOf(todo)}
                title={todo.title}
                description={todo.description}/>
        ));
    return (
        <div className="TodoList">
            {a}
        </div>
    );
}

export default TodoList;
