import { FC } from 'react';
import { Task } from './App/App.types';

interface ITodoItemProps {
  todo: Task;
  onDelete: (id: number) => void;
}

export const TodoItem: FC<ITodoItemProps> = ({ todo, onDelete }) => (
  <li>
    <p>{todo.text}</p>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
);
