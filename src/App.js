import {BrowserRouter, Route} from "react-router-dom";
import './App.css';


// import components
import Navbar from "./components/Navbar";
import Bin from "./components/Bin";
import Home from "./components/Home";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Route path="/" exact component={Home} />
                <Route path="/bin" exact component={Bin} />
            </div>
        </BrowserRouter>
    );
}

export default App;
