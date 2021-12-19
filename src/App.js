import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// css
import "./App.scss";

// components
import Header from "./components/Header";
import Todo from "./components/Todo";
import Covid19 from "./components/Covid19";

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container mt-5">
                <Routes>
                    <Route exact path="/" element={<Todo />} />
                    <Route exact path="/covid19" element={<Covid19 />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
