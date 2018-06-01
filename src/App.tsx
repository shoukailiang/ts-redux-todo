import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from './actions/';
import { StoreState } from './types';
import './App.css';

import Input from './components/input';
import List, { ItemType } from './components/list';


interface Props {
  todos: Array<ItemType>;
  index: number;
  onAddTodo: (todo: ItemType) => void;
  onDeleteTodo: (index: number) => void;
  onEditTodo: (todo: ItemType) => void;
  onEditIndex: (index: number) => void;
  dispatch: Dispatch<actions.IsInAction>;
}

export function mapStateToProps({ todos, editIndex }: StoreState) {
  return {
    todos,
    index: editIndex,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IsInAction>) {
  return {
    onAddTodo: (todo: ItemType) => dispatch(actions.AddTodo(todo)),
    onDeleteTodo: (index: number) => dispatch(actions.DeleteTodo(index)),
    onEditTodo: (todo: ItemType) => dispatch(actions.EditTodo(todo)),
    onEditIndex: (index: number) => dispatch(actions.EditIndex(index)),
    dispatch: dispatch,
  };
}
function App(props: Props) {
  let InputText: HTMLInputElement;

  function handleAdd() {
    const value = InputText.value;

    if (props.index) {
      props.onEditTodo({
        index: props.index,
        text: value,
      });
      InputText.value = '';
      props.onEditIndex(0);
      return;
    }

    props.onAddTodo({
      index: Math.round(Math.random() * 1000),
      text: value,
    });

    InputText.value = '';
  }
  let pro = (index: number) => new Promise<number>((yes, no) => {
    setTimeout(() => {
      yes(index);
    }, 3000); // tslint:disable-line
  });

  function some(index: number): any {
    return function (dispatch: Dispatch<actions.IsInAction>) {
      return pro(index).then(index => dispatch(actions.DeleteTodo(index)));
    };
  }


  function handleDel(index: number) {
    props.dispatch(some(index)); // tslint:disable-line
    InputText.value = '';
    return;
  }

  function  handleEdit(todo: ItemType) {
    InputText.value = todo.text;
    props.onEditIndex(todo.index);
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h2>Welcome to React</h2>
      </div>
      <div className='container'>
        <Input inputRef={input => InputText = input} submit={() => handleAdd()} />
        <List
          del={(index: number) => handleDel(index)}
          edit={(todo: ItemType) => handleEdit(todo)}
          todos={props.todos}
        />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
