import { useState } from 'react';
// import { CheckoutPagePayment } from '../PaymentForm';
// import { TextInput } from '../TextInput';
import { PropsInput } from '../TextInput/TextInput.types';
// import { User } from '../User';

import { Props } from './App.types';

import './App.css';
import { AddTodoForm } from '../AddTodoForm';
import { TodoItem } from '../TodoItem';

const user: Props = {
  idUser: 1,
  name: 'Jon',
  age: 34,
  email: 'mail@example.com',
};

const input: PropsInput = {
  initialValue: '',
  onSave: (value) => {},
};

const text: string = `The e-mail is passed as a child: ${user.email}`;

// export function App() {
//   return (
//     <>
//       {/* <User {...user} /> */}
//       <User {...user} children={text} /> <br />
//       <TextInput initialValue={input.initialValue} onSave={input.onSave} />
//       <CheckoutPagePayment />
//     </>
//   );
// }

// for Todo project with React
export function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
