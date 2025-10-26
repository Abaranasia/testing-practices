import { FormEvent, useState } from 'react'
import { User } from '../App';

  interface UserFormProps {
    onUserAdd: (user: User) => void
  }

  const defaultUser= {
    name: '',
    email:'',
  };

const UserForm = ({ onUserAdd }:  UserFormProps) => {
  const [name, setName] = useState<string>(defaultUser.name);
  const [email, setEmail] = useState<string>(defaultUser.email);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onUserAdd({ name, email });
    
    setName(defaultUser.name);
    setEmail(defaultUser.email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  )
}

export default UserForm;