

import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList.tsx";

describe('UserList tests', () => {
    it('shows a table', () => {
        const mockUsers = [
            { name: 'pepe', email: 'pp@pp.com' },
            { name: 'paco', email: 'pc@pc.com' },
        ];

        render(<UserList users={mockUsers} />)
        const renderedTable = screen.getByRole('table');
        expect(renderedTable).toBeInTheDocument();
    });
});