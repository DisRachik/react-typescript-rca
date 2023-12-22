// import { useState } from 'react';
// import { CheckoutPagePayment } from '../PaymentForm';
// import { TextInput } from '../TextInput';
// import { PropsInput } from '../TextInput/TextInput.types';
// import { User } from '../User';

// import { Props } from './App.types';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

import './App.css';
import { AddTodoForm } from '../AddTodoForm';
import { TodoItem } from '../TodoItem';
// import { Task } from './App.types';
import { addTodo, deleteTodo } from '../../redux/todoSlice';

// const user: Props = {
//   idUser: 1,
//   name: 'Jon',
//   age: 34,
//   email: 'mail@example.com',
// };

// const input: PropsInput = {
//   initialValue: '',
//   onSave: (value) => {},
// };

// const text: string = `The e-mail is passed as a child: ${user.email}`;

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

/**-----  -----*/
/**----- for Todo project with React -----*/
/**-----  -----*/

export function App() {
  // const [todos, setTodos] = useState<Task[]>([]);

  // const addTodo = (text: string) => {
  //   const newTodo = { id: Date.now(), text };
  //   setTodos([...todos, newTodo]);
  // };

  // const deleteTodo = (id: number) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };

  /** with use Redux */
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Todo list</h1>
      {/* <AddTodoForm onAdd={addTodo} /> */}
      <AddTodoForm onAdd={(text) => dispatch(addTodo(text))} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={(id) => dispatch(deleteTodo(id))} />
        ))}
      </ul>
    </div>
  );
}
