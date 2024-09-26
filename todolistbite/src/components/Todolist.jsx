import { useState, useRef } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid


function Todolist() {
    const [todo, setTodo] = useState({ description: "", duedate: "", priority: ""});
    const [todos, setTodos] = useState([]);

    const gridRef = useRef();

    const [colDefs, setColDefs] = useState([
        { 
            field: "description", 
            filter: true, 
            editable: true, 
            floatingFilter: true
        },
        { 
            field: "priority", 
            sortable: true, 
            filter: true,
            floatingFilter: true,
            cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'} 
        },
        { 
            field: "duedate", 
            sortable: true, 
            filter: true, 
            floatingFilter: true
        }
        //cellRender delete
       // {
       //     headerName: 'Actions', 
       //     cellRenderer: (params) => (
       //         <button onClick={() => handleDelete(params.node.rowIndex)}>
       //             Delete
       //         </button>
       //     )
       // }
    ])

    const handleAdd = () => {
        console.log(todo)
        if (!todo.description || !todo.priority || !todo.duedate)  {
            alert("Type something first")
        } else {
            //adding todo to the beginning and not replacing state
            setTodos(todos => [todo, ...todos]);
            setTodo({ description: "", duedate: "", priority: "" });
        }
    }

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
        setTodos(todos.filter((_, index) =>
        gridRef.current.getSelectedNodes()[0].id != index));
    }
        else {
            alert('Select a row first!');
        }
    }

        //if (gridRef.current.getSelectedNodes().length > 0) {
        //setTodos(todos.filter((todo, index) => 
        //   index != gridRef.current.getSelectedNodes()[0].id))
        //}
        //else {
        //    alert('Select a row first!');
        //}
        //  };

        //console.log("Delete" + rowIndex);
        //boolean check, if index is equal: delete
        //setTodos(todos => todos.filter((todo, i) => i !== rowIndex));
        //setTodos(array);
        //slice or filter usage to delete index value fom an array
    //}

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
            <button onClick={handleDelete}>Delete</button>
            <div
                className="ag-theme-material" // applying the Data Grid theme
                style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={ params => gridRef.current = params.api }
                    rowData={todos}
                    columnDefs={colDefs}
                    rowSelection='single'
                    animateRows={true}
                />
            </div>
        </>
    );
}

export default Todolist;