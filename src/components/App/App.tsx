import { User } from '../User';

import { Props } from './App.types';

const user: Props = {
  idUser: 1,
  name: 'Jon',
  age: 34,
  email: 'mail@example.com',
};

const text: string = `The e-mail is passed as a child: ${user.email}`;

export function App() {
  return (
    // <User {...user} />
    <User {...user} children={text} />
  );
}
