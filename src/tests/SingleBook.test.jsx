import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SingleBook from '../components/SingleBook';

describe('Testing color card change', () => {
  it('Checks if Cards change color on click', async () => {
    // !)
    render(<SingleBook />);
    // 2)
    const card = screen.getByTestId('border-card');
    expect(card).toHaveClass('');
    // 3)
    fireEvent.click(card);
    // 4)
    expect(card).toHaveClass('border border-2 border-danger');
  });
});
