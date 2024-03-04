import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/api/v1/products");
      setProducts(data);
    };
    getAllProducts();
  }, []);

  return (
    <>
      <h1>Latests Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;
