// import { render, screen } from '@testing-library/react';
// import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// describe('Search component', () => {
//   it('should update the search query state when the user types in the input field', () => {
//     const { getByTestId } = render(<Search />);
//     const inputField = getByTestId('search-input');

//     fireEvent.change(inputField, { target: { value: 'apple' } });

//     expect(inputField.value).toEqual('apple');
//   });

//   it('should trigger the search function when the search button is clicked', () => {
//     const searchFn = jest.fn();
//     const { getByTestId } = render(<Search onSearch={searchFn} />);
//     const searchButton = getByTestId('search-button');

//     fireEvent.click(searchButton);

//     expect(searchFn).toHaveBeenCalled();
//   });

//   it('should update the search results state when new results are returned', () => {
//     const searchFn = jest.fn().mockReturnValue([{ id: 1, name: 'Apple' }, { id: 2, name: 'Orange' }]);
//     const { getByTestId, findByTestId } = render(<Search onSearch={searchFn} />);
//     const inputField = getByTestId('search-input');
//     const searchButton = getByTestId('search-button');

//     fireEvent.change(inputField, { target: { value: 'fruit' } });
//     fireEvent.click(searchButton);

//     expect(findByTestId('search-result-1').textContent).toEqual('Apple');
//     expect(findByTestId('search-result-2').textContent).toEqual('Orange');
//   });

//   it('should display the search results in the user interface when new results are returned', () => {
//     const searchFn = jest.fn().mockReturnValue([{ id: 1, name: 'Apple' }, { id: 2, name: 'Orange' }]);
//     const { getByTestId, findByTestId } = render(<Search onSearch={searchFn} />);
//     const inputField = getByTestId('search-input');
//     const searchButton = getByTestId('search-button');

//     fireEvent.change(inputField, { target: { value: 'fruit' } });
//     fireEvent.click(searchButton);

//     const searchResults = getByTestId('search-results');

//     expect(searchResults).toBeInTheDocument();
//     expect(searchResults.children).toHaveLength(2);
//     expect(findByTestId('search-result-1')).toBeInTheDocument();
//     expect(findByTestId('search-result-2')).toBeInTheDocument();
//   });

//   it('should handle special characters and spaces in the search query', () => {
//     const searchFn = jest.fn().mockReturnValue([{ id: 1, name: 'Apples & Oranges' }]);
//     const { getByTestId, findByTestId } = render







//     import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Search from './Search';

// test('search feature', () => {
//   // set up the test
//   const searchFn = jest.fn();
//   const { getByTestId } = render(<Search onSearch={searchFn} />);
//   const searchInput = getByTestId('search-input');
//   const searchButton = getByTestId('search-button');

//   // test that the search input field correctly updates the search query state when the user types in the field
//   fireEvent.change(searchInput, { target: { value: 'apples' } });
//   expect(searchInput.value).toBe('apples');

//   // test that the search button correctly triggers the search function when clicked
//   fireEvent.click(searchButton);
//   expect(searchFn).toHaveBeenCalled();

//   // test that the search function correctly updates the search results state when new results are returned
//   const searchResults = [{ title: 'Red Apples', description: 'A delicious variety of apples that are red in color.' }];
//   searchFn.mockReturnValue(searchResults);
//   fireEvent.click(searchButton);
//   expect(searchFn).toHaveReturnedWith(searchResults);

//   // test that the search results are correctly displayed in the user interface when new results are returned
//   const searchResultTitle = getByTestId('search-result-title');
//   expect(searchResultTitle.textContent).toBe('Red Apples');

//   // test that the search function correctly handles special characters and spaces in the search query
//   fireEvent.change(searchInput, { target: { value: 'apples & oranges' } });
//   fireEvent.click(searchButton);
//   expect(searchFn).toHaveBeenCalledWith('apples & oranges');

//   // test that the search function correctly handles an empty search query
//   fireEvent.change(searchInput, { target: { value: '' } });
//   fireEvent.click(searchButton);
//   expect(searchFn).toHaveBeenCalledWith('');

//   // test that the search function correctly handles different capitalization in the search query
//   fireEvent.change(searchInput, { target: { value: 'Apples' } });
//   fireEvent.click(searchButton);
//   expect(searchFn).toHaveBeenCalledWith('apples');





import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Home from './component/Home';

describe('Search', () => {
  it('should update the search query state when the user types in the input field', async () => {
    const { getByTestId } = render(<Home />);
    const input = getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'apple' } });
    expect(input.value).toEqual('apple');
  });

  it('should update the search results state and display the results in the UI when new results are returned', async () => {
    const searchMock = jest.fn().mockResolvedValue([  {
      id:1,
      img: "images/pizza.jpg",
      cat: "food",
    }, {
      id:2,
      img: "images/taj.jpg",
      cat: "wonders",
    }]);
    const { getByTestId, findAllByTestId } = render(<Home search={searchMock} />);
    const input = getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'food' } });
    const results = await findAllByTestId('search-result');
    expect(results).toHaveLength(1);
  });

  it('test that the search function correctly handles typos or misspellings in the search query', async () => {
    const { getByTestId ,getByText} = render(<Home />);
    const input = getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'aplle' } });
    expect(getByText('No Result Found!')).toBeInTheDocument()
  });

  });
