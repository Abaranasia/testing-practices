import { render, screen } from "@testing-library/react";

import UserForm from "../../components/UserForm";
import { submitData } from "./App.fixtures";

const userMock = {
  name: "pepito",
  email: "pepo@gmail.com",
};

describe("UserForm tests", () => {
  it("shows two inputs and a button", () => {
    render(<UserForm onUserAdd={vi.fn()} />);

    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it("should call onUserAdd with user name and email when the form is submitted", async () => {
    const onUserAddMock = vi.fn();

    render(<UserForm onUserAdd={onUserAddMock} />);

    await submitData(userMock);

    expect(onUserAddMock).toHaveBeenCalledWith(userMock);
  });

   it("empties the two inputs when form is submitted", async () => {
    render(<UserForm onUserAdd={() => vi.fn()} />);

    const { nameInput, emailInput } = await submitData(userMock);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  }); 
});


