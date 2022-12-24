import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Home from "./component/Home";

describe("Search-Box", () => {
  it("should update the search query state when the user types in the input field", async () => {
    const { getByTestId } = render(<Home />);
    const input = getByTestId("search-input");

    fireEvent.change(input, { target: { value: "apple" } });
    expect(input.value).toEqual("apple");
  });

  it("should update the search results state and display the results in the UI when new results are returned", async () => {
    const searchMock = jest.fn()
    const { getByTestId, findAllByTestId } = render(
      <Home search={searchMock} />
    );
    const input = getByTestId("search-input");
    fireEvent.change(input, { target: { value: "food" } });
    const results = await findAllByTestId("search-result");
    expect(results).toHaveLength(2);
  });

  it("test that the search function correctly handles typos or misspellings in the search query", async () => {
    const { getByTestId, getByText } = render(<Home />);
    const input = getByTestId("search-input");

    fireEvent.change(input, { target: { value: "aplle" } });
    expect(getByText("No Result Found!")).toBeInTheDocument();
  });

  it("should display the search results in the user interface when new results are returned", async () => {
    const searchFn = jest.fn()
    const { getByTestId ,findAllByTestId} = render(
      <Home onSearch={searchFn} />
    );
    const inputField = getByTestId("search-input");

    fireEvent.change(inputField, { target: { value: "food" } });

    const searchResults = await findAllByTestId("search-result");

    expect(searchResults[0]).toBeInTheDocument();
    expect(searchResults).toHaveLength(2);
  });
});


describe("Category-Button", () => {
  it('should call the Food when clicked',async () =>  {
    const {getByRole,findAllByTestId} = render(<Home />);
    fireEvent.click(getByRole("button", { name: 'Food' }));
    const searchResults =await findAllByTestId("search-result");
    expect(searchResults).toHaveLength(2);
  });
  it('should call the All when clicked',async () =>  {
    const {getByRole,findAllByTestId} = render(<Home />);
    fireEvent.click(getByRole("button", { name: 'All' }));
    const searchResults =await findAllByTestId("search-result");
    expect(searchResults).toHaveLength(5);
  });
  it('should call the cWonders when clicked',async () =>  {
    const {getByRole,findAllByTestId} = render(<Home />);
    fireEvent.click(getByRole("button", { name: 'Wonders' }));
    const searchResults =await findAllByTestId("search-result");
    expect(searchResults).toHaveLength(1);
  });
  it('should call the Birds when clicked',async () =>  {
    const {getByRole,findAllByTestId} = render(<Home />);
    fireEvent.click(getByRole("button", { name: 'Birds' }));
    const searchResults =await findAllByTestId("search-result");
    expect(searchResults).toHaveLength(1);
  });
  it('should call the cPlaces when clicked',async () =>  {
    const {getByRole,findAllByTestId} = render(<Home />);
    fireEvent.click(getByRole("button", { name: 'Places' }));
    const searchResults =await findAllByTestId("search-result");
    expect(searchResults).toHaveLength(1);
  });

});