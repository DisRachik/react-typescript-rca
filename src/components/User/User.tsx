import React from 'react';

import { Props } from '../App/App.types';

/*-----  -----*/
/*----- using Props as a generic-prop for React.Component -----*/
/*-----  -----*/

// export function User({ name, age }: Props) {
//   return (
//     <div>
//       <p>{`User name is ${name}`}</p>
//       <p>{`User age is ${age}`}</p>
//     </div>
//   );
// }

/*-----  -----*/
/*----- using React.FC or React.FunctionComponent to determine the types of functional component -----*/
/*-----  -----*/

// export const User: React.FC<Props> = ({ name, age }) => {
//   return (
//     <div>
//       <p>{`User name is ${name}`}</p>
//       <p>{`User age is ${age}`}</p>
//     </div>
//   );
// };

/*-----  -----*/
/*----- typing for children with use React.FunctionComponent -----*/
/*-----  -----*/

type UserProps = {
  children?: React.ReactNode;
  onUserUpdate?: (user: Props) => void;
};

export function User({ name, age, children, onUserUpdate }: Props & UserProps) {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>

      <div>{children}</div>
    </div>
  );
}
