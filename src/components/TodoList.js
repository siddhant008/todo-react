import React from "react";
//import components
import Todo from "./Todo";

const TodoList = (props) => {
    let b=[];
    let a = [];
    Object.keys(props.todos).map(todoKey => {
            if (!props.todos[todoKey].bin) {
                if(!props.todos[todoKey].pinned)
                    a.push( <Todo
                        todos={props.todos} setTodos={props.setTodos}
                        key={todoKey} index={todoKey}
                        bin={false}
                        title={props.todos[todoKey].title}
                        description={props.todos[todoKey].description}
                    />)
                else
                    b.push(<Todo
                        todos={props.todos} setTodos={props.setTodos}
                        key={todoKey} index={todoKey}
                        bin={false}
                        title={props.todos[todoKey].title}
                        description={props.todos[todoKey].description}
                    />)
            }
        }
    )

    return (
        <div className="TodoList">
            <h1>Pinned Notes</h1>
            { b.length ? b : <p><i>There are no pinned notes.</i></p>}
            {/*{!a.includes(undefined) ? a : <div><b>There are currently no Notes.</b></div> }*/}

            <h1>All Notes</h1>
            { a.length || a.includes(undefined) ? a : <p><i>There are no notes.</i></p>}
        </div>
    );
}

export default TodoList;
