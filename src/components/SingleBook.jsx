import Card from 'react-bootstrap/Card';
// import { Component } from 'react';

const SingleBook = (props) => {
  // class SingleBook extends Component {
  const checkSelected = () => {
    return props.isSelected === true && props.selectedAsin === props.book.asin
      ? 'border border-2 border-danger'
      : '';
  };

  return (
    <Card data-testid='border-card'
      onClick={() => props.changeSelectionState(true, props.book.asin)}
      className={checkSelected()}
    >
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
