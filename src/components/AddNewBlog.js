import { Link, useNavigate } from "react-router-dom";
import "./DetailBlog.scss";

const AddNewBlog = () => {
    const navigate = useNavigate();
    const handleBackData = () => {
        navigate("/blog");
    };
    return (
        <>
            <h4 className="back" onClick={handleBackData}>
                &lt;-back
            </h4>
            <h1 className="mt-2">Add new blog</h1>
            <div>
                <form className="mt-3" style={{ maxWidth: "400px" }}>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input class="form-control" id="title" />
                    </div>
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea
                            class="form-control"
                            id="content"
                            rows="3"
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Add
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddNewBlog;
