import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Welcome from '../components/Welcome';

describe('Testing initial mounting', () => {
  it('Checks if Alert is mounted correctly', () => {
    // !)
    render(<Welcome />);
    // 2)
    const alert = screen.getByText(/benvenuto!/i);
    // 3)
    // 4)
    expect(alert).toBeInTheDocument();
  });
});
