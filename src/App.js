import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// css
import "./App.scss";

// components
import {
    Header,
    Todo,
    Covid19,
    Blog,
    DetailBlog,
    AddNewBlog,
} from "./components";

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container mt-5">
                <Routes>
                    <Route exact path="/" element={<Todo />} />
                    <Route path="/covid19" element={<Covid19 />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/add-new-blog" element={<AddNewBlog />} />
                    <Route path="/blog/:id" element={<DetailBlog />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
