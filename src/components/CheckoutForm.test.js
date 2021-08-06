import { render, screen, waitFor } from "@testing-library/react";

import CheckoutForm from "./CheckoutForm";
import React from "react";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  userEvent.type(screen.getByLabelText(/first name/i), "testFirst");
  userEvent.type(screen.getByLabelText(/first name/i), "testLast");
  userEvent.type(screen.getByLabelText(/address/i), "testAddress");
  userEvent.type(screen.getByLabelText(/city/i), "testCity");
  userEvent.type(screen.getByLabelText(/state/i), "testState");
  userEvent.type(screen.getByLabelText(/zip/i), "12345");
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByTestId("successMessage")).toBeInTheDocument();
});
