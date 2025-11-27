import { ListGroup } from 'react-bootstrap';

const SingleComment = (props) => {
  return (
    <ListGroup.Item data-testid='single-comment' className='border-end-0 border-start-0' key={props.review.elementId}>
      {props.review.rate} - {props.review.comment}
    </ListGroup.Item>
  );
};

export default SingleComment