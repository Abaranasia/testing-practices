import { useEffect, useState } from 'react';

import UserForm from './components/UserForm.tsx';
import UserList from './components/UserList.tsx';

export interface User {
  name: string;
  email: string;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    console.log('users :>> ', users);
  }, [users])
  
  const onUserAdd = (newUser: User) => {
    setUsers([
      ...users,
      newUser,
    ])
  };

  return (
    <div className="App">
      <h1>Simple User list</h1>
      <UserForm onUserAdd= {onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
