// import { Component } from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

const CommentArea = (props) => {
  // class CommentArea extends Component {
  // state = {
  //   comments: [],
  //   loading: true,
  //   error: false
  // };

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getComments = (asin) => {
    const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

    fetch(URL + asin, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGVkNzIzZTc0MDAwMTVmN2ZkYjkiLCJpYXQiOjE3NjM2NDMwOTUsImV4cCI6MTc2NDg1MjY5NX0.REy03d-jT7KnlSs2hgEzmFhxfLbWzagIFRKUqUZUpeA'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('errore nella chiamata: ' + res.status);
        }
      })

      .then((commentsArray) => {
        // console.log(commentsArray);

        // this.setState({
        //   comments: commentsArray,
        //   loading: false
        // });
        setComments(commentsArray);
        setLoading(false);
      })
      .catch((err) => {
        console.log('errore nella chiamata: ', err);
        // this.setState({
        //   loading: false,
        //   error: true
        // });
        setLoading(false);
        setError(true);
      });
  };

  // componentDidMount() {
  //   this.getComments(this.props.asinFromSelection);
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asinFromSelection !== this.props.asinFromSelection) {
  //     this.getComments(this.props.asinFromSelection);
  //   }
  // }

  useEffect(() => {
    getComments(props.asinFromSelection);
  }, [props.asinFromSelection]);

  // render() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h3>Book Reviews</h3>
          {loading && <Spinner animation="grow" data-testid="spinner" />}
          {error && <Alert>Errore nel caricamento</Alert>}
        </Col>
      </Row>
      {props.asinFromSelection !== '' && (
        <>
          <Row>
            <Col>
              <CommentsList comments={comments}></CommentsList>
            </Col>
          </Row>
          <Row>
            <AddComment
              data-testid="add-comment"
              asinFromSelection={props.asinFromSelection}
            />
          </Row>
        </>
      )}
    </Container>
  );
  // }
};

export default CommentArea;
