import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";

const App = () => {
    const name = "Xuan Hoang";
    const year = 2021;
    const course = {
        name: "ReactJS",
        price: "100$",
    };

    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    Hello React App, I'm {name} in {year}
                </h2>
                <h3 style={{ color: "red", fontSize: "16px" }}>
                    Course: {JSON.stringify(course)}
                </h3>
            </header>
        </div>
    );
};

export default App;
