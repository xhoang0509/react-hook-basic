import { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";

const App = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const inputRef = useRef();
    const [name, setName] = useState("Xuan Hoang");
    const year = 2021;

    const handleClick = () => {
        if (!todo) {
            alert("Empty input");
            return;
        }
        setTodos([...todos, todo]);
        setTodo("");
        inputRef.current.focus();
    };
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const handleChangeName = () => {
        setName("Nguyen Xuan Hoang");
    };
    const handleDeleteItem = (index) => {
        todos.splice(index, 1);
        setTodos([...todos]);
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
                    id="input-todo"
                />
                <button onClick={handleClick}>Click me</button>
                <div>
                    <h3>Todos list: </h3>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>
                                {todo}
                                <span onClick={() => handleDeleteItem(index)}>
                                    {" "}
                                    &times;
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <br />
                <button onClick={handleChangeName}>Change</button>
            </header>
        </div>
    );
};

export default App;
