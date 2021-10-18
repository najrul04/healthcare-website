import React, { useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import Doctors from "../Doctor/Doctors";
import("./Home.css");

const Home = () => {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    fetch("./Hospital.json")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  return (
    <div className="home">
      <Container>
        <Carousel className="mb-4">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 slider-img"
              src="https://c1.wallpaperflare.com/preview/224/10/460/hospital-ward-hospital-medical-room.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 slider-img"
              src="https://www.hospiq.com/wp-content/uploads/2018/10/blog-10-1-18.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://www.healthcarefacilitiestoday.com/media/graphics/2018/17969-operating-room.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="mb-4 text-primary">First 4 Units</h1>
        <Row xs={1} md={2} lg={4} sm={1} className="g-4">
          {doctor.slice(0,4).map((doctorItems) => (
            <Doctors music={doctorItems} key={doctorItems.id}></Doctors>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
