import * as React from 'react';

import { ItemType } from './list';

interface Props {
  todo: ItemType;
  del: (index: number) => void;
  edit: (todo: ItemType) => void;
}

export default function Item (props: Props) {
  return (
    <div>
      {props.todo.index} - {props.todo.text}
      <span className='del' onClick={() => props.del(props.todo.index)}> Del</span>
      <span className='edit' onClick={() => props.edit(props.todo)}> Edit</span>
    </div>
  );
}
