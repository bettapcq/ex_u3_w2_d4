import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';
// import { Component } from 'react';

const CommentsList = (props) => {
  // class CommentsList extends Component {
  // render() {
  return (
    <ListGroup className="my-0">
      {props.comments.map((comment) => {
        return (
          <SingleComment data-testid='single-comment' key={comment._id} review={comment}></SingleComment>
        );
      })}
    </ListGroup>
  );
  // }
};

export default CommentsList;
