import React, {useState, useEffect} from "react";
//import components
import Todo from "./Todo";
import axios from "../axios-notes";

const Bin = () => {
    const [binTodos, setBinTodos] = useState([]);

    useEffect(() => {
        axios.get('/mynotes.json')
            .then(response => {
                setBinTodos({...response.data})
            })
            .catch(error => console.log(error));
    }, []);

    let a = Object.keys(binTodos).map(binTodoKey => {
            if (binTodos[binTodoKey].bin) {
                return<Todo
                    todos={binTodos} setTodos={setBinTodos}
                    key={binTodoKey} index={binTodoKey}
                    bin={true}
                    title={binTodos[binTodoKey].title}
                    description={binTodos[binTodoKey].description}
                />
            }
        }
    )
    return (
        <div className="TodoList">
            {/*{!a.includes(undefined) ? a : <div><b>There are currently no Notes in your Bin.</b></div> }*/}
            {a}
        </div>
    );
}

export default Bin;
