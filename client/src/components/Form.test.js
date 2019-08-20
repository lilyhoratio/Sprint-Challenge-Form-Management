import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

describe("<Form/>", () => {
  it("renders without crashing", () => {
    render(<Form />);
  });
  //   it("props are working", () => {
  //       const display = render(<Display strikes={2} balls={3} />)
  //       display.getByText(/Strikes: 2/)
  //       display.getByText(/Balls: 3/)
  //   })
});
