import React from "react";
//import components
import Todo from "./Todo";

const TodoList = (props) => {

    let a = Object.keys(props.todos).map(todoKey => {
            if (!props.todos[todoKey].bin) {
                return <Todo
                    todos={props.todos} setTodos={props.setTodos}
                    key={todoKey} index={todoKey}
                    bin={false}
                    title={props.todos[todoKey].title}
                    description={props.todos[todoKey].description}
                />
            }
        }
    )

    return (
        <div className="TodoList">
            {/*{!a.includes(undefined) ? a : <div><b>There are currently no Notes.</b></div> }*/}
            {a}
        </div>
    );
}

export default TodoList;
