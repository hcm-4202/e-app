import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import shopStore from "../store/store";
import Categories from "../components/home/Categories";

it("should be categories present", () => {
  render(
    <MemoryRouter>
      <Provider store={shopStore}>
        <Categories
          categorie={[
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
          ]}
        />
      </Provider>
    </MemoryRouter>
  );

  const electronics = screen.getByText("ELECTRONICS");
  const jewelery = screen.getByText("JEWELERY");

  expect(electronics).toBeInTheDocument();
  expect(jewelery).toBeInTheDocument();
});
