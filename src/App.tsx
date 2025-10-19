import { useEffect, useState } from 'react';

import UserForm from './components/UserForm.tsx';
import UserList from './components/UserList.tsx';

interface User {
  name: string;
  emai: string;
};

function App() {

  return (
    <div className="App">
      Hello there!
    </div>
  );
}

export default App;
