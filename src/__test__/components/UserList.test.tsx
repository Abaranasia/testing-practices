import { render, screen, within } from "@testing-library/react";
import UserList from "../../components/UserList.tsx";

describe("UserList tests", () => {
  it("render one row per user", () => {
    renderComponent();

    const renderedTable = screen.getByRole("table");
    expect(renderedTable).toBeInTheDocument();

    // const rows = screen.getAllByRole('row');
    // expect(rows).toHaveLength(3);

    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    expect(rows).toHaveLength(2);
  });

  it("render the email and name of each user", () => {
    const { users } = renderComponent();

    for (let user of users) {
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }
  });
});

  function renderComponent() {
    const users = [
      { name: "pepe", email: "pp@pp.com" },
      { name: "paco", email: "pc@pc.com" },
    ];

    render(<UserList users={users} />);

    return {
      users,
    };
  }