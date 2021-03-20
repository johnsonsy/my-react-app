import { ADD_TODO } from '../action/TodoListAction'

const initState = {
    todoList: ['first'],
};

const TodoListReducer = (state = initState, action) => {
    console.log("state>",state)
    console.log("action>",action)
    switch (action.type) {
        case ADD_TODO: {
            const tempTodo = state.todoList.map(list => list);
            tempTodo.push(action.payload.text);
            return {
                todoList: tempTodo,
            };
        }
        default:
            return state;
    }
};
export default TodoListReducer
