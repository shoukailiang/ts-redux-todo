import * as constants from '../constants';
import { ItemType } from '../types';
export interface IsAddTodo {
  type: constants.ADD_TODO;
  todo: ItemType;
}

export interface IsDeleteTodo {
  type: constants.DELETE_TODO;
  index: number;
}

export interface IsEditTodo {
  type: constants.EDIT_TODO;
  todo: ItemType;
}

export interface IsEditIndex {
  type: constants.SET_EDIT_INDEX;
  index: number;
}

export type IsInAction = IsEditTodo | IsDeleteTodo | IsAddTodo | IsEditIndex;

export function AddTodo(todo: ItemType): IsAddTodo {
  return {
    type: constants.ADD_TODO,
    todo,
  };
}
export function EditTodo(todo: ItemType): IsEditTodo {
  return {
      type: constants.EDIT_TODO,
      todo,
  };
}

export function DeleteTodo(index: number): IsDeleteTodo {
  return {
      type: constants.DELETE_TODO,
      index,
  };
}

export function EditIndex(index: number): IsEditIndex {
  return {
      type: constants.SET_EDIT_INDEX,
      index,
  };
}

