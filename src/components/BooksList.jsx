// import { Component } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SingleBook from './SingleBook';
import { Col, Row } from 'react-bootstrap';
import horror from '../data/horror.json';
import CommentArea from './CommentArea';

const BooksList = () => {
  // class BooksList extends Component {
  // state = {
  //   inputString: '',
  //   selected: false,
  //   bookAsinSelected: ''
  // };

  const [inputString, setInputString] = useState('');
  const [selected, setSelected] = useState(false);
  const [bookAsinSelected, setBookAsinSelected] = useState('');

  const changeSelectionState = (value, asin) => {
    // this.setState({
    //   selected: value,
    //   bookAsinSelected: asin
    // });
    setSelected(value);
    setBookAsinSelected(asin);
  };

  return (
    <>
      <Col>
        <Form className="d-flex mb-2">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            // this.setState({ inputString: e.target.value })
          />
        </Form>
      </Col>
      <Col>
        <Row>
          <Col xs={8}>
            <Row>
              {horror
                .filter((b) => {
                  return b.title.toLowerCase().includes(inputString);
                })
                .map((book) => (
                  <Col
                    data-testid="book-card"
                    key={book.asin}
                    xs={12}
                    md={6}
                    lg={4}
                  >
                    <SingleBook
                      book={book}
                      asinFromBookList={book.asin}
                      changeSelectionState={changeSelectionState}
                      selectedAsin={bookAsinSelected}
                      isSelected={selected}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={4}>
            <CommentArea asinFromSelection={bookAsinSelected} />
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default BooksList;
