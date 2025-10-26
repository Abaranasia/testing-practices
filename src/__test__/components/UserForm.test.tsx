import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";

import UserForm from "../../components/UserForm";

describe('UserForm tests', () => {
     it('shows two inputs and a button', () => {
        render(<UserForm onUserAdd={vi.fn()} />)

        const inputs = screen.getAllByRole('textbox');
        const button = screen.getByRole('button');

        expect(inputs).toHaveLength(2);
        expect(button).toBeInTheDocument();
    });

    it('should call onUserAdd with user name and email when the form is submitted', async () => {
        const userMock = {
            name: 'pepito',
            email: 'pepo@gmail.com'
        };
        const onUserAddMock = vi.fn();
 
        render(<UserForm onUserAdd={onUserAddMock} />)

        // const [nameInput, emailInput] = screen.getAllByRole('textbox');
        const nameInput = screen.getByRole('textbox', {name: /name/i});
        const emailInput = screen.getByRole('textbox', {name: /email/i});

        await userEvent.click(nameInput);
        await userEvent.keyboard(userMock.name);

        await userEvent.click(emailInput);
        await userEvent.keyboard(userMock.email);

        const button = screen.getByRole('button');
        await userEvent.click(button);

        expect(onUserAddMock).toHaveBeenCalledWith(userMock);
    }) 
});