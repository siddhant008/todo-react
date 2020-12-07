import React, {useEffect, useState} from "react";

//
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import axios from "../axios-notes";
import CircularProgress from '@material-ui/core/CircularProgress';


const Home = () => {
    const [todos, setTodos] = useState(
        {
            title: '',
            description: '',
            pinned:false,
            bin: false
            }
        );

    useEffect(() => {
        axios.get('/mynotes.json')
            .then(response => {
                setTodos({...response.data})
            })
            .catch(error => console.log(error));
    }, []);

    let a = <div><b>There are currently no Notes.</b></div>;
    if(todos.title !== "" && Object.keys(todos).length && !todos.bin) {
         a = <TodoList todos={todos} setTodos={setTodos}/>
    }
    else if(todos.title==="" && Object.keys(todos).length) {
        a = <CircularProgress />;
    }

    return(
        <div>
            <CreateTodo todos={todos} setTodos={setTodos}/>
            <br/>
            <hr/>
            <div className="allNotesClass">{a}</div>

        </div>
    )
}

export default Home;
