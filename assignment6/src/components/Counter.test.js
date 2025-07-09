import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('renders with initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText(/Count :0/)).toBeInTheDocument();

  });

  it('increments count when increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button",{name:"Increment"});
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count :1/)).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole("button",{name:"Decrement"});
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count :-1/)).toBeInTheDocument();
  });

  it('increments and decrements multiple times', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button",{name:"Increment"});;
    const decrementButton = screen.getByRole("button",{name:"Decrement"});;

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(screen.getByText(/Count :1/)).toBeInTheDocument();
  });
});
