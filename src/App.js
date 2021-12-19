import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// css
import "./App.scss";

// components
import Header from "./components/Header";
import Todo from "./components/Todo";

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container mt-5">
                <Routes>
                    <Route exact path="/" element={<Todo />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
