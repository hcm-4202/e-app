import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/home/Home';
import {  MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import shopStore from '../store/store';

test('Home page with categories and products', () => {
  React.act(() => {
    render(<MemoryRouter>
    <Provider store={shopStore}>
    <Home />
    </Provider>
    </MemoryRouter>);
  });
  const category = screen.getByTestId('testid')
  const product = screen.getByText(/Products/i)
  console.log(category)
  expect(category).toBeInTheDocument()
  expect(product).toBeInTheDocument()
  
});