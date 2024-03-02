import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container className="text-center py-3">
        <p>ProShop &copy; {currentYear}</p>
      </Container>
    </footer>
  );
}

export default Footer;
