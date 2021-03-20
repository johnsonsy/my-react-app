import { combineReducers } from 'redux';
import TodoListReducer from './TodoListReducer'

const appReducer = combineReducers({
    todo: TodoListReducer
});
export default appReducer
