import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders the app', () => {
//   render(<App />);
//   const text = screen.getByText(/Olá mundo!/i);
//   expect(text).toBeInTheDocument();
// });

test('app has a button', () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeInTheDocument();
})

test('app has a image', () => {
  render(<App />);
  const imageEl = screen.getByRole('img');
  expect(imageEl).toBeInTheDocument();
})

test('app has a text paragraph', () => {
  render(<App />);
  const textEl = screen.getByRole('paragraph');
  expect(textEl).toBeInTheDocument();
})