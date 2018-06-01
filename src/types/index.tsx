import { ItemType } from '../components/list';

export { ItemType } from '../components/list';

export type TodoState = Array<ItemType>;
export type EditState = number;

export type StoreState = {
    todos: TodoState,
    editIndex: EditState,
};
