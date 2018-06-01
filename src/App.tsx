import * as React from 'react';
import './App.css';
import Input from './components/input';
import List, { ItemType } from './components/list';

interface States {
  todos: Array<ItemType>;
  editIndex: number | boolean;
}

class App extends React.Component<{}, States> {

  InputText: HTMLInputElement;
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [
        {
          index: 1,
          text: 'skl',
        },
      ],
      editIndex: false,
    };
  }
  handleDel(index: number) {
    const delIndex = this.state.todos.findIndex(todo => todo.index === index);
    const todos = this.state.todos;
    todos.splice(delIndex, 1);
    this.setState({
      todos,
    });
  }
  handleEdit(todos: ItemType) {
    this.InputText.value = todos.text;
    this.setState({
      editIndex: todos.index,
    });
  }
  handleAdd() {
    const value = this.InputText.value;
    if (this.state.editIndex) {
      const editTodo = this.state.todos.find(todo => todo.index === this.state.editIndex);
      if (!editTodo) { return; }
      editTodo.text = value;
      this.setState({
        todos: this.state.todos,
        editIndex: 0,
      });
      this.InputText.value = '';
      return;
    }
    const lastIndex = this.state.todos[this.state.todos.length - 1].index | 0;
    const index = lastIndex + 1;
    this.setState({
      todos: [...this.state.todos, { text: value, index }],
    });
    this.InputText.value = '';
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Input inputRef={input => this.InputText = input} submit={() => this.handleAdd()} />
          <List
            todos={this.state.todos}
            del={(index: number) => this.handleDel(index)}
            edit={(todo: ItemType) => this.handleEdit(todo)}
          />
        </div>
      </div>
    );
  }
}

export default App;
