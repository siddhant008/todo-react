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

    let a =[];
    Object.keys(binTodos).map(binTodoKey => {
            if (binTodos[binTodoKey].bin) {
                a.push(<Todo
                    todos={binTodos} setTodos={setBinTodos}
                    key={binTodoKey} index={binTodoKey}
                    bin={true}
                    title={binTodos[binTodoKey].title}
                    description={binTodos[binTodoKey].description}
                />)
            }
        }
    )
    return (
        <div className="TodoList">
            {a.length ? a : <p><i>There are no notes in bin.</i></p>}
        </div>
    );
}

export default Bin;
