import { CheckoutPagePayment } from '../PaymentForm';
import { TextInput } from '../TextInput';
import { PropsInput } from '../TextInput/TextInput.types';
import { User } from '../User';

import { Props } from './App.types';

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

export function App() {
  return (
    <>
      {/* <User {...user} /> */}
      <User {...user} children={text} /> <br />
      <TextInput initialValue={input.initialValue} onSave={input.onSave} />
      <CheckoutPagePayment />
    </>
  );
}
