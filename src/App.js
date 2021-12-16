import logo from "./logo.svg";
import "./App.css";

const App = () => {
    const name = "Xuan Hoang";
    const year = 2021;
    const course = {
        name: "ReactJS",
        price: "100$",
    };
    
    return (
        <div className="App">
            {console.log(course)}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    Hello React App, I'm {name} in {year}
                </h2>
                <h3>Course: {JSON.stringify(course)}</h3>
                
            </header>
        </div>
    );
};

export default App;
