import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App';
import { User } from './components/App/App.types';

const user: User = {
  id: 1,
  name: 'Jon',
  email: 'mail@example.com',
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App user={user} />
  </StrictMode>
);
