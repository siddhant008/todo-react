import React from "react";
import axios from "../axios-notes";

const CreateTodo = (props) => {
    let tempTodo = {title: '', description: ''};

    const titleHandler = (e) => {
        tempTodo.title = e.target.value;
    }
    const descriptionHandler = (e) => {
        tempTodo.description = e.target.value;
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let todo = [...props.todo];
        todo.push(tempTodo);
        props.setTodo(todo);
        axios.post('/mynotes.json', todo)
            .then((response) => console.log('response', response))
            .catch(error => console.log(error));
        tempTodo = {title: '', description: ''};
        e.target.parentElement.reset();

    }

    return (
        <form className="createTodoForm">
            <input type="text" onChange={titleHandler} placeholder="Title" required/>
            <input type="text" onChange={descriptionHandler} placeholder="Description" required/>
            <input type="submit" value="Create +" onClick={onSubmitHandler}/>
        </form>
    );

}

export default CreateTodo;
