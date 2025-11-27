import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SingleBook from '../components/SingleBook';

describe('Testing color card change', () => {
  it('Checks if Cards change color on click', async () => {
    // !)
    render(
      <SingleBook
        book={{
          asin: '0316405345',
          category: 'horror',
          img: 'https://images-na.ssl-images-amazon.com/images/I/61rnkCg2iYL.jpg',
          price: 25.48,
          title: 'Invisible'
        }}
        asinFromBookList="0316405345"
        changeSelectionState={changeSelectionState(false, '0316405345')}
        selectedAsin="0316405345"
        isSelected={false}
      />
    );
    // 2)
    const card = screen.getByTestId('border-card');
    expect(card).toHaveClass('');
    // 3)
    fireEvent.click(card);
    // 4)
    expect(card).toHaveClass('border border-2 border-danger');
  });
});
