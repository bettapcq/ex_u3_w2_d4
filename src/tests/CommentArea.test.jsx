import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CommentArea from '../components/CommentArea';

describe('Testing initial mounting', () => {
  it('Checks if title is mounted correctly', () => {
    // 1)
    render(<CommentArea asinFromSelection="" />);
    // 2)
    const title = screen.getByText(/book reviews/i);
    // 3)
    // 4)
    expect(title).toBeInTheDocument();
  });
  it('Checks if spinner is mounted correctly', () => {
    // 1)
    render(<CommentArea asinFromSelection="" />);
    // 2)
    const spinner = screen.getByTestId('spinner');
    // 3)
    // 4)
    expect(spinner).toBeInTheDocument();
  });
  it("Shouldn't show the comment list", () => {
    // 1)
    render(<CommentArea asinFromSelection="" />);
    // 2)
    const commentList = screen.queryByTestId('comment-list');
    // 3)
    // 4)
    expect(commentList).not.toBeInTheDocument();
  });
  it("Shouldn't show the add comment component", () => {
    // 1)
    render(<CommentArea asinFromSelection="" />);
    // 2)
    const addComment = screen.queryByTestId('add-comment');
    // 3)
    // 4)
    expect(addComment).not.toBeInTheDocument();
  });
});

describe('Testing show comments when click a book', () => {
  it('Should show the comments list', async () => {
    // 1)
    render(<CommentArea asinFromSelection="0735218994" />);
    // 2)
    const singleComment = await screen.findAllByTestId('single-comment');
    // 3)

    // 4)
    expect(singleComment).toHaveLength(10);
  });
  it('Should show the add comment component', async () => {
    // 1)
    render(<CommentArea asinFromSelection="0735218994" />);
    // 2)
    const addComment = await screen.findByText(/add a comment/i);
    // 3)

    // 4)
    expect(addComment).toBeInTheDocument();
  });
});

// 1)
// 2)
// 3)
// 4)
