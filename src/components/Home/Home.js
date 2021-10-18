import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Card, Col } from "react-bootstrap";
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
            <Doctors doctor={doctorItems} key={doctorItems.id}></Doctors>
          ))}
        </Row>

        <h1 className='my-3'>Latest News</h1>

            <div className="d-flex justify-content-around">

           <div className="mx-1">

           <Col>
          <Card className="card_latest shadow-lg">
           <Card.Body>
             <Card.Title><h4>Biden Administration to Invest $100 Million to Ease Health Worker Shortage</h4></Card.Title>
             <Card.Img variant="top" src='https://cdn.vox-cdn.com/thumbor/kuIMFWgT-708pYJl3me8eV71TE0=/0x0:5331x3554/1200x800/filters:focal(3561x1328:4413x2180)/cdn.vox-cdn.com/uploads/chorus_image/image/69968535/GettyImages_1345175573__1_.0.jpg'  className="card_img"/>
             <Card.Text>
               <p className='my-2'>Over the past year, the COVID-19 pandemic has forced some big changes in the world of medicine, making telehealth much more widely available than ever...</p>
             </Card.Text>
             <Button className='py-1 rounded bg-primary text-white' variant="primary"><a className='text-decoration-none text-white' target='_blank' href="https://health.usnews.com/conditions/articles/a-beginners-guide-to-a-virtual-doctors-visit">See more</a></Button>
           </Card.Body>
         </Card>
         </Col>

           </div>


           <div className="mx-1">

           <Col>
          <Card className="card_latest shadow-lg">
           <Card.Body>
             <Card.Title><h4>Doctor who advocated Covid-19 therapy including ivermectin applied for patent on same unproven treatment</h4></Card.Title>
             <Card.Img variant="top" src='https://i.guim.co.uk/img/media/244a2b9ab50e54347ca181371008b414893b5685/0_114_2311_1387/master/2311.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=b8cd50551f10d8ef448f7e5471e7989d'  className="card_img"/>
             <Card.Text>
               <p className='my-2'>A Sydney gastroenterologist who has been enthusiastically promoting an unapproved Covid-19 treatment...</p>
             </Card.Text>
             <Button className='py-1 rounded bg-primary text-white' variant="primary"><a className='text-decoration-none text-white' target='_blank' href="https://www.theguardian.com/australia-news/2021/oct/18/doctor-who-advocated-covid-19-therapy-including-ivermectin-applied-for-patent-on-same-unproven-treatment">See more</a></Button>
           </Card.Body>
         </Card>
         </Col>

           </div>


           <div>

           <Col>
          <Card className="card_latest shadow-lg">
           <Card.Body>
             <Card.Title><h4>Bill Clinton discharged from hospital after treatment for infection</h4></Card.Title>
             <Card.Img variant="top" src='https://wehco.media.clients.ellingtoncms.com/img/photos/2018/03/11/resized_250499-clinton-0312_51-24363.JPG'  className="card_img"/>
             <Card.Text>
               <p className='my-1'>Former President Bill Clinton was discharged from a Southern California hospital Sunday morning, the physician overseeing the doctors... </p>
             </Card.Text>
             <Button className='py-1 rounded bg-primary text-white' variant="primary"><a className='text-decoration-none text-white' target='_blank' href="https://health.usnews.com/conditions/articles/a-beginners-guide-to-a-virtual-doctors-visit">See more</a></Button>
           </Card.Body>
         </Card>
         </Col>

           </div>

            </div>
        

            <h1 className='my-3'>Nobel Winners in Medicine</h1>

            <div className="d-flex justify-content-around">

            <div className="mx-1">

            <Col>
            <Card className="card_latest shadow-lg">
            <Card.Body>
            <Card.Img variant="top" src='https://media.gettyimages.com/photos/nobel-laureate-in-physiology-for-medicine-william-kaelin-looks-on-a-picture-id1182283783?s=612x612'  className="card_img"/>
            <Card.Title><h4 className='my-2'>William Bill G. Kaelin Jr</h4></Card.Title>
            
            <Card.Text>
            <p className='my-2'>William "Bill" G. Kaelin Jr. (born November 23, 1957) is an American professor of medicine at Harvard University and the Dana–Farber Cancer Institute. His laboratory studies tumor suppressor proteins. Kaelin Jr. won the Nobel Prize in Physiology or Medicine in 2019 with Peter J. Ratcliffe and Gregg L. Semenza</p>
            </Card.Text>
            <Button className='py-1 rounded bg-primary text-white' variant="primary"><a className='text-decoration-none text-white' target='_blank' href="https://www.dana-farber.org/find-a-doctor/william-g-kaelin-jr/">See more</a></Button>
            </Card.Body>
            </Card>
            </Col>

            </div>



            <div className="mx-1">

            <Col>
            <Card className="card_latest shadow-lg">
            <Card.Body>
            <Card.Img variant="top" src='https://i.ytimg.com/vi/HKT4v5EdFFg/maxresdefault.jpg'  className="card_img"/>
            <Card.Title><h4 className='my-2'>James P. Allison</h4></Card.Title>
            
            <Card.Text>
            <p className='my-2'>James Patrick Allison (born August 7, 1948) is an American immunologist. He is a professor and chair of Immunology and executive director of immunotherapy platform at the M. D. Anderson Cancer Center. His discoveries have led to new cancer treatments for the deadliest cancers. He is also the director of the Cancer Research Institute (CRI). He is thought to be the first person... </p>
            </Card.Text>
            <Button className='py-1 rounded bg-primary text-white' variant="primary"><a className='text-decoration-none text-white' target='_blank' href="https://www.nobelprize.org/prizes/medicine/2018/allison/facts/">See more</a></Button>
            </Card.Body>
            </Card>
            </Col>

            </div>



            <div className="mx-1">

            <Col>
            <Card className="card_latest shadow-lg">
            <Card.Body>
            <Card.Img variant="top" src='https://www.mediatheque.lindau-nobel.org/Content/Assets/Medium/37429___rosbash_michael_medicine.jpg'  className="card_img"/>
            <Card.Title><h4 className='my-2'>Michael Rosbash</h4></Card.Title>
            
            <Card.Text>
            <p className='my-2'>Michael Morris Rosbash (born March 7, 1944) is an American geneticist and chronobiologist of Jewish descent. Rosbash is a professor at Brandeis University[1] and investigator at the Howard Hughes Medical Institute. Rosbash's research group cloned the Drosophila period gene in 1984...</p>
            </Card.Text>
            <Button className='py-1 rounded bg-primary text-white' variant="primary"><a className='text-decoration-none text-white' target='_blank' href="https://www.nobelprize.org/prizes/medicine/2017/rosbash/facts/">See more</a></Button>
            </Card.Body>
            </Card>
            </Col>

            </div>

            </div>


      </Container>
    </div>
  );
};

export default Home;
