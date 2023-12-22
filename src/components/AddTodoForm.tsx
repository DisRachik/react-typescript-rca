import { ChangeEvent, FC, FormEvent, useState } from 'react';

interface IAddTodoFormProps {
  onAdd: (text: string) => void;
}

export const AddTodoForm: FC<IAddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New todo" value={newTodo} onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
};
