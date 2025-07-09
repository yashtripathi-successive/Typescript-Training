
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  it('does not render when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={() => {}}>Hello</Modal>);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('renders when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={() => {}}>Hello</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  it('calls onClose when Close button is clicked', () => {
    const onClose = jest.fn();
    render(<Modal isOpen={true} onClose={onClose}>Content</Modal>);

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
