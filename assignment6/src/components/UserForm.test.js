
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';

describe('UserForm Component', () => {
  it('renders all input fields and submit button', () => {
    render(<UserForm onSubmit={() => {}} />);

    expect(screen.getByLabelText(/name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('allows user to input name, email and phone', () => {
    render(<UserForm onSubmit={() => {}} />);

    const nameInput = screen.getByLabelText(/name:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const phoneInput = screen.getByLabelText(/phone:/i);

    fireEvent.change(nameInput, { target: { value: 'yash' } });
    fireEvent.change(emailInput, { target: { value: 'yash@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567899' } });

    expect(nameInput.value).toBe('yash');
    expect(emailInput.value).toBe('yash@example.com');
    expect(phoneInput.value).toBe('1234567899');
  });

  it('shows validation errors if required fields are empty on submit', () => {
    render(<UserForm onSubmit={() => {}} />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/phone is required/i)).toBeInTheDocument();
  });

  it('shows validation error for invalid email', () => {
    render(<UserForm onSubmit={() => {}} />);

    fireEvent.change(screen.getByLabelText(/name:/i), { target: { value: 'xyz' } });
    fireEvent.change(screen.getByLabelText(/email:/i), { target: { value: 'invalidemail' } });
    fireEvent.change(screen.getByLabelText(/phone:/i), { target: { value: '123-456-7890' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
  });

  it('calls onSubmit with form data when form is valid', () => {
    const mockOnSubmit = jest.fn();
    render(<UserForm onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByLabelText(/name:/i), { target: { value: 'yash' } });
    fireEvent.change(screen.getByLabelText(/email:/i), { target: { value: 'yash@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone:/i), { target: { value: '9876543210' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'yash',
      email: 'yash@example.com',
      phone: '9876543210',
    });

    
    expect(screen.getByLabelText(/name:/i).value).toBe('');
    expect(screen.getByLabelText(/email:/i).value).toBe('');
    expect(screen.getByLabelText(/phone:/i).value).toBe('');
  });
});
