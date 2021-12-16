import { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";

const App = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const inputRef = useRef();
    const name = "Xuan Hoang";
    const year = 2021;

    const handleClick = () => {
        setTodos([...todos, todo]);
        setTodo("");
        inputRef.current.focus();
    };
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    Hello React App, I'm {name} in {year}
                </h2>
                <input
                    ref={inputRef}
                    type="text"
                    onChange={(e) => handleChange(e)}
                    value={todo}
                />
                <button onClick={handleClick}>Click me</button>
                <div>
                    <h3>Todos list: </h3>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default App;
