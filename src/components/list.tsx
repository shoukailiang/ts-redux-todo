import * as React from 'react';
import Item from './item';

export interface ItemType {
  index: number;
  text: string;
}

interface Props {
  todos: Array<ItemType>;
  del: (index: number) => void;
  edit: (todo: ItemType) => void;
}

export default function List(props: Props) {
  const itemList = props.todos.map(todo => {
    return <Item
      key={todo.index.toString()}
      edit={props.edit}
      todo={todo}
      del={props.del}
    />;
  });

  return (
    <div>
      {itemList}
    </div>
  );
}
