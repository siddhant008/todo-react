import {useState, useEffect} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import axios from "./axios-notes";
import './App.css';


// import components
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";


function App() {
    const [todo, setTodo] = useState([]);
    // useEffect( () => {
    //     axios.get('/mynotes.json')
    //         .then( response => response.data)
    //         .catch(error => console.log(error));
    // }, []);
    console.log('todo ==', todo);
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Route path="/" exact render={() => <TodoList todo={todo} setTodo={setTodo}/>}/>
                <Route path="/new" exact render={() => <CreateTodo todo={todo} setTodo={setTodo}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
