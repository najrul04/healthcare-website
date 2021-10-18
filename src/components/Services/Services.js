import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctors";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./Hospital.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="home">
      <Container>
          <h3 className="mb-4">All Services</h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {
          service.map(doctor => <Doctor doctor={doctor}></Doctor>)
          }
        </Row>
      </Container>
    </div>
  );
};

export default Service;
