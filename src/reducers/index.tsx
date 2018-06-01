import { IsInAction } from '../actions';
import { EditState, TodoState } from '../types';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_EDIT_INDEX } from '../constants';

const editStartState = 0;

const todosStartState = [
    { index: 1, text: 'test' },
];

export function Edit(state: EditState = editStartState, action: IsInAction): EditState {
    switch (action.type) {
        case SET_EDIT_INDEX:
            return action.index;
        default:
            return state;
    }
}

export function Todos(state: TodoState = todosStartState, action: IsInAction): TodoState {
    let todos: TodoState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_TODO:
            return [...todos, action.todo];
        case DELETE_TODO:
            const delIndex = todos.findIndex(todo => todo.index === action.index);
            todos.splice(delIndex, 1);
            return todos;
        case EDIT_TODO:
            const editTodo = todos.find(todo => todo.index === action.todo.index);
            if (!editTodo) { return state; }
            editTodo.text = action.todo.text;
            return todos;
        default:
            return state;
    }
}
