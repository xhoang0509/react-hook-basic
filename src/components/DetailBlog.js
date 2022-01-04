import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "./DetailBlog.scss";
const DetailBlog = () => {
    const [blog, setBlog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();
    let navigate = useNavigate();
    const handleBackData = () => {
        navigate("/blog");
    };
    useEffect(async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/` + id)
            .then((res) => res.json())
            .then(
                (res) => {
                    setBlog(res);
                    setIsLoaded(true);
                },
                (error) => {}
            );
    }, [id]);
    return (
        <>
            <h4 className="back" onClick={handleBackData}>
                &lt;-back
            </h4>
            <br />
            {isLoaded ? (
                <div>
                    <h1 className="title-detail">title: {blog.title}</h1>
                    <br />
                    <h4>Content: {blog.body}</h4>
                </div>
            ) : (
                <h1>loading</h1>
            )}
        </>
    );
};

export default DetailBlog;
