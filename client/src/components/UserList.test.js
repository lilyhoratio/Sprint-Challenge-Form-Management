import React from "react";
import UserList from "./UserList";
import { render } from "./UserList.js";
import "@testing-library/react/cleanup-after-each";
// import { findAllByDisplayValue } from "@testing-library/react";

describe("<UserList />", () => {
  it("renders without crashing", () => {
    render(<UserList />);
  });

  it("render list of users(recipes) provided on props", () => {
    const comp = render(
      <UserList users={[{ name: "macaroni", course: "main" }]} />
    );

    comp.getByText(/macaroni/i))
  });
});
