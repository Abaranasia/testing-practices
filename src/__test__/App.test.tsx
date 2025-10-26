import { render, screen } from "@testing-library/react";

import App from "../App";
import { submitData } from "./components/App.fixtures";

describe(" App tests", () => {
  it("can receive a new user and show it on the list", async () => {
    const userMock = {
      name: "pepito",
      email: "pepo@gmail.com",
    };

    render(<App />);

    await submitData(userMock);

    const name = screen.getByRole("cell", { name: userMock.name });
    const email = screen.getByRole("cell", { name: userMock.email });

    const renderedTable = screen.getByRole("table");
    expect(renderedTable).toBeInTheDocument();

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
