import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

it("renders welcome message", () => {
  render(<Header />);
  expect(screen.getByText(/Header is working/i)).toBeInTheDocument();
});
