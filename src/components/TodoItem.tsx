export const TodoItem = ({ todo, onDelete }) => (
  <li>
    <p>{todo.text}</p>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
);
