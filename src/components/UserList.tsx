import { User } from "../App";

const UserList = ({ users }: {users: User[]}) => {
    const renderUsers = users.map((user) => {
        return (
            <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        )
    });

    return (
        <table className="user-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody data-testid="users">
                {renderUsers}
            </tbody>
        </table>
    )
}

export default UserList;