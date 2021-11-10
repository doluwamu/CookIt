import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark">
        <Row>
          <Col className="text-center py-3 text-light">
            Copyright &copy; CookIt
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
