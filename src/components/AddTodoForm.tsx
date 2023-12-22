import { useState } from 'react';

export const AddTodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo('');
  };

  const onChange = (e) => setNewTodo(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New todo" value={newTodo} onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
};
