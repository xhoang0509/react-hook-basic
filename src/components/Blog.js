import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";
const Blog = () => {
    const [blog, setBlog] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then(
                (res) => {
                    setBlog(res);
                    setIsLoaded(true);
                },
                (error) => {}
            );
    }, []);
    let newBlog;
    if (blog && blog.length > 0) {
        newBlog = blog.slice(0, 10);
    }
    return (
        <>
            <h1>All blogs post</h1>
            <Link to="/add-new-blog" className="btn btn-primary mt-5">
                + All new blog
            </Link>
            <div className="row">
                {newBlog
                    ? newBlog.map((blog) => (
                          <div
                              className="card col-lg-3 col-md-6 col-sm-6 mt-5 ml-2 mr-2"
                              key={blog.id}
                          >
                              <div className="card-body">
                                  <h5 className="card-title">
                                      <Link to={"/blog/" + blog.id}>
                                          {blog.title}
                                      </Link>
                                  </h5>
                                  <p className="card-text">{blog.body}</p>
                                  <Link
                                      to={"/blog/" + blog.id}
                                      className="btn btn-primary"
                                  >
                                      view detail
                                  </Link>
                              </div>
                          </div>
                      ))
                    : "loadding..."}
            </div>
        </>
    );
};

export default Blog;
