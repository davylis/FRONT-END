import { useState } from "react";
import TodoTable from "./TodoTable";

function Todolist() {
    const [todo, setTodo] = useState({ description: "", duedate: "" });
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (!todo) {
            alert("Type something first")
        } else {
            //adding todo to the beginning and not replacing state
            setTodos([todo, ...todos]);
            setTodo({ description: "", duedate: "" });
        }
    }

    const handleDelete = (row) =>{
        console.log("Delete" + row);
        //boolean check, if index in equal: delete
        setTodos(todos.filter((_, index) => row != index));
        //slice or filter usage to delete index value fom an array
    }
    return (
        <>
            <h3>My Todos</h3>
            <input
                placeholder="Description"
                value={todo.description}
                onChange={event => setTodo({ ...todo, description: event.target.value })}
            />
            <input
                type="date"
                value={todo.duedate}
                onChange={event => setTodo({ ...todo, duedate: event.target.value })}
            />
            <button onClick={handleAdd}>Add Todo</button>
            <TodoTable todos={todos} handleDelete={handleDelete} />
        </>
    );
}

export default Todolist;