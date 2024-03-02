import { Link, useParams } from "react-router-dom";
import products from "../../products";
import { Col, Row, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";

function ProductPage() {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id == productId);

  return (
    <>
      <Link to="/">Go back</Link>

      <Row>
        <Col md={5}>
          <Image fluid src={product.image} alt={product.name} />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: $ {product.price}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  {product.countInStock > 0 ? "Add To Cart" : "Sold Out"}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductPage;
