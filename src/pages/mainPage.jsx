import './style.css';
import {useState} from "react";

const mainPage = () => {
    const [todos, setTodos] = useState([]);

    const todolist = todos.map(todo =>
    <li className={'flex text-[16px] '} key={todo.id}>
        <p className={'mr-[30px] p-1'}>{todo.id}</p>
        <p className={'p-1'}>{todo.title}</p>
        <button className={'ml-auto bg-red-600 text-white rounded-r-lg p-1 hover:bg-red-800 '} onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
    )

    const addTodo = (e) => {
        e.preventDefault();
        const inputField = document.getElementById('todoInputField');
        const errorElement = document.getElementById('error');
        const newTodo = {
            id: todos.length + 1,
            title: inputField.value,
        };

        if (newTodo.title.trim() !== '') {
            setTodos([...todos, newTodo]);
            inputField.value = '';
            errorElement.innerHTML = '';
        } else {
            errorElement.innerText = 'Please enter a valid task';
        }
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
        const errorElement = document.getElementById('error');
        errorElement.innerHTML = '';
    }

    return (
        <>
            <div className="mt-30 block font-display text-black" id='container'>
                <div className="text-center font-bold text-5xl text-purple-600" id="titlee">
                    <h1>To Do List</h1>
                </div>

                <div className="text-center mt-10 text-[18px]" id="todoInput">
                    <form action="">
                        <input className="rounded-md w-[400px] mr-[20px] border-2 p-1 focus:outline-violet-500 focus:border-purple-600" type="text" placeholder="Enter a task" id="todoInputField"/>
                        <button className="font-bold cursor-pointer rounded-md bg-purple-600 text-white p-2 hover:bg-purple-800" id="addTodoButton" onClick={addTodo}>Add Task</button>
                    </form>
                    <p className={'text-red-700 text-[13px]'} id={'error'}></p>
                </div>
                <div className={'ml-auto mr-auto mt-5 rounded-b-lg shadow-lg w-[90%] max-w-[700px]'} id="todolist">
                    {todos.findIndex(todo => todo.id !== null) !== -1 ? (
                        <ul id={'showToDo'}>{todolist}</ul>
                        ): null
                    }

                </div>
            </div>
        </>
    );
}

export default mainPage;