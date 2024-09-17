import { useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid


function Todolist() {
    const [todo, setTodo] = useState({ description: "", duedate: "", priority: "" });
    const [todos, setTodos] = useState([]);

    const [colDefs, setColDefs] = useState([
        { field: "description", filter: true },
        { field: "priority" },
        { field: "duedate" }

    ])

    const handleAdd = () => {
        if (!todo) {
            alert("Type something first")
        } else {
            //adding todo to the beginning and not replacing state
            setTodos([todo, ...todos]);
            setTodo({ description: "", duedate: "", priority: "" });
        }
    }

    const handleDelete = (row) => {
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
                placeholder="Priority"
                value={todo.priority}
                onChange={event => setTodo({ ...todo, priority: event.target.value })}
            />
            <input
                type="date"
                value={todo.duedate}
                onChange={event => setTodo({ ...todo, duedate: event.target.value })}
            />
            <button onClick={handleAdd}>Add Todo</button>
            <div
                className="ag-theme-material" // applying the Data Grid theme
                style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={todos}
                    columnDefs={colDefs}
                />
            </div>
        </>
    );
}

export default Todolist;