import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { User } from "../../App";

export async function submitData(userMock: User ) {
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  await userEvent.click(nameInput);
  await userEvent.keyboard(userMock.name);

  await userEvent.click(emailInput);
  await userEvent.keyboard(userMock.email);

  const button = screen.getByRole("button");
  await userEvent.click(button);

  return { nameInput, emailInput };
}