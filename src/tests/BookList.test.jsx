import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BooksList from '../components/BooksList';
import CommentArea from '../components/CommentArea';
import SingleBook from '../components/SingleBook';

describe('Testing initial mounting', () => {
  it('Checks if Cards mounted number is correctly', async () => {
    // !)
    render(<BooksList />);
    // 2)
    const cards = await screen.findAllByTestId('book-card');
    // 3)
    // 4)
    expect(cards).toHaveLength(150)
  });
  it('Checks if comment area mounted corretly', () => {
    render(<CommentArea asinFromSelection="" />)
  })
});

