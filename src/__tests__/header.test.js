import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import shopStore from "../store/store";
import Home from "../components/home/Home";
test("Header bar with title ,cart and userIcon", () => {
  React.act(() => {
    render(
      <MemoryRouter>
        <Provider store={shopStore}>
          <Header />
          <Home />
        </Provider>
      </MemoryRouter>
    );
  });
  const title = screen.getByText(/ShoppingMart/i);
  const cart = screen.getByText(/Cart/i);

  expect(title).toBeInTheDocument();
  expect(cart).toBeInTheDocument();

  fireEvent.click(title);
  const categories = screen.getByText(/Category/i);
  expect(categories).toBeInTheDocument();
});
