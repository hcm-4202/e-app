import { render, screen } from '@testing-library/react';
import React from 'react';
import Login from '../components/login';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

test('User name & Password input fields along with Login button', () => {
  React.act(() => {
    render(<MemoryRouter><Login /></MemoryRouter>);
  });
  
  const usernameInput = screen.getByLabelText(/UserName/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole('button');
     
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});