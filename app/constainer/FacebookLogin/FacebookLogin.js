import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../action/TodoListAction'

const Login = () => {
    const [listName, setListName] = useState('');
    const todoList = useSelector(state => state.todo.todoList);
    const dispatch = useDispatch();
    console.log("todolist", todoList)
    const addTodoList = () => {
        dispatch(addTodo(listName))
        setListName('')
    };
    return (
        <div className="d-flex justify-content-center">
            <input value={listName} onChange={(e) => {
                setListName(e.target.value);
            }}/>
            <button type="button" onClick={() => addTodoList()}>
                增加待辦事項
            </button>
            <div>
                <ul>
                    {todoList.map(todo => <li key={todo}>{todo}</li>)}
                </ul>
            </div>

        </div>
    );
};


export default Login;
