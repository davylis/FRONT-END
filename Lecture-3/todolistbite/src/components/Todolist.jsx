import { useState } from "react";

function Todolist() {
    const [todo, setTodo] = useState({description: "", duedate: ""});
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if(!todo){
            alert("Type something first")
        } else {
        //adding todo to the beginning and not replacing state
        setTodos([todo, ...todos]);
        setTodo({description: "", duedate: ""});
        }
    }

    return (
        <>
            <h3>My Todos</h3>
            <input
                placeholder="Description" 
                value={todo.description }
                onChange={event => setTodo({...todo, description: event.target.value})}
                />
                <input
                placeholder="Due Date" 
                value={todo.duedate }
                onChange={event => setTodo({...todo, duedate: event.target.value})}
                />
                <button onClick={handleAdd}>Add Todo</button>
                <table>
                    <tbody>
                        {
                            todos.map((todo, index) => 
                            <tr key = {index}>
                                <td> {todo.description} </td>
                                <td> {todo.duedate} </td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </>
    );
}

export default Todolist;