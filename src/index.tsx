import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.css';

import { App } from './components/App';
// import { User } from './components/App/App.types';

// const user: User = {
//   id: 1,
//   name: 'Jon',
//   age: 34,
//   email: 'mail@example.com',
// };

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    {/* <App user={user} /> */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
