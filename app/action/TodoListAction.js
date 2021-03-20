export const ADD_TODO = 'ADD_TODOLIST';

export const addTodo = (text) => {
    return (dispatch)=>{
        setTimeout(() => {
            // You can invoke sync or async actions with `dispatch`
            dispatch({
                type: ADD_TODO,
                payload: { text, },
            });
        }, 3000);
    }
}
