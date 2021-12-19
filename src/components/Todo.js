import "./Todo.scss";
import { useState, useRef, useEffect } from "react";

const todosLocalStorage = JSON.parse(localStorage.getItem("todos")) || "";

const Todo = () => {
    const [todo, setTodo] = useState({ name: "", status: "Chưa làm" });
    const [todos, setTodos] = useState([...todosLocalStorage]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [indexUpdate, setIndexUpdate] = useState(false);
    const inputRef = useRef();

    const handleClickAddItem = () => {
        if (!todo) {
            alert("Empty input");
            return;
        }
        if (isUpdate) {
            todos[indexUpdate] = todo;
            setTodos([...todos]);
            setIsUpdate(false);
            setTodo({ name: "", status: "Chưa làm" });
            return;
        }
        setTodos([...todos, todo]);
        setTodo({ name: "", status: "Chưa làm" });
        inputRef.current.focus();
    };
    const handleChangeInputValue = (e) => {
        setTodo({ ...todo, name: e.target.value });
    };
    const handleChangeSelectInput = (e) => {
        console.log(">>> status: ", e.target.innerText);
        setTodo({ ...todo, status: e.target.value });
    };
    const handleUpdateItem = (index) => {
        setTodo(todos[index]);
        setIndexUpdate(index);
        inputRef.current.focus();
        setIsUpdate(true);
    };
    const handleDeleteItem = (index) => {
        todos.splice(index, 1);
        setTodos([...todos]);
    };
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="input-container">
            <h3>
                {isUpdate
                    ? "Sửa thông tin công việc"
                    : "Nhập thông tin công việc"}
            </h3>
            <label className="mt-3" htmlFor="">
                Tên
            </label>
            <input
                ref={inputRef}
                type="text"
                onChange={(e) => handleChangeInputValue(e)}
                value={todo.name}
                className="form-control "
            />
            <label className="mt-3" htmlFor="">
                Trạng thái
            </label>
            <br />
            <select
                className="custom-select"
                style={{ width: "400px" }}
                onChange={handleChangeSelectInput}
                value={todo.status}
            >
                <option value="Chưa làm">Chưa làm</option>
                <option value="Đang làm">Đang làm</option>
                <option value="Đã làm">Đã làm</option>
            </select>
            <br />
            <button
                className={
                    isUpdate ? "btn btn-warning mt-2" : "btn btn-primary mt-2"
                }
                onClick={handleClickAddItem}
            >
                {isUpdate ? "Sửa" : "Thêm"}
            </button>
            <table className="table mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Xóa</th>
                        <th scope="col">Sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{todo.name}</td>
                                <td>
                                    <button
                                        className={
                                            todo.status == "Chưa làm"
                                                ? "btn btn-sm btn-warning"
                                                : "btn btn-sm btn-success"
                                        }
                                    >
                                        {todo.status}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => handleUpdateItem(index)}
                                    >
                                        Sửa
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteItem(index)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Todo;
