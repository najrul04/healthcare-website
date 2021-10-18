import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ('./Doctors.css')
const Doctor = (props) => {
    const {title,img,details} = props.doctor;
    console.log(title)
    return (
        <div>
            <Col>
            <Card className="card shadow-lg">
            <Card.Img variant="top" src={img}  className="card-img"/>
            <Card.Body>
              <Card.Title><h2>{title}</h2></Card.Title>
              <Card.Text>
              {details}
              </Card.Text>
              <Button className='py-1 rounded bg-primary text-white' variant="primary">Click to see Details</Button>
            </Card.Body>
          </Card>
          </Col>
            
        </div>
    );
};

export default Doctor;