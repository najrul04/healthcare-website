import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
       
       <div className="about">

            

            <Container>

            <h1 className="mb-3 mt-3">About Us</h1>

            <div className='d-flex justify-content-center p-2'>

            <div className='mx-5'>

            <h2>General Information: </h2>

            <p>This hospital is a general hospital where almost all kinds of primary treatment you will get.This hospital also has the intermediate section and other important sections too in order to give proper treatment that is needed.Heart Surgery, Brain Surgery, Burn victim treatments and many other treatments are given in here.Our doctors are very well educated with years of experiences from around the world who make sure you get the best treatment possible.</p>

            </div>

            <div>

            <h2>Our Success Rate:</h2>

            <p>We have Huge success rate because of the right management of our hospital with well educated employees. Most of the doctors from here are very well experienced and studied from world renowned medical schools and colleges. So the treatment our patients gets from us are the highest quality possible and that is why we get to have higher success rate than any other hospital around us.</p>

            </div>

            </div>

            <h1 className="my-3">Our Doctors:</h1>

            <Row lg={3} className="g-4">
          <Col>
            <Card >
              <Card.Img className="about-img" variant="top" src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05133450/Dr-William.png" />
              <Card.Body>
                <Card.Title><h3>Dr. William A. Abdu, M.D, M.S.</h3></Card.Title>
                <Card.Text>
                Dr. Abdu is an Associate Professor of Orthopedics and of The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center
                </Card.Text>
                <Card.Text>

                  <p className="fw-bold">Dr. Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. He hones surgery of the Spine, including Cervical, Thoracic and Lumbar Disorders, Disk Herniation, Spinal Stenosis, Spondylolisthesis, Spondylotic Myelopathy, Spinal Cord Injury, and Spine Trauma. Also, he had discovered many new techniques for spine treatment.</p>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05133850/Dr.-Myles.-B.-Abbot.png" />
              <Card.Body>
                <Card.Title> <h3>Dr. Myles. B. Abbott, M.D.</h3> </Card.Title>
                <Card.Text>
                Dr. Myles is also one of the best-known doctors of Pediatricians in the world
                </Card.Text>
                <Card.Text>

                <p className="fw-bold">He graduated from the University of Miami Leonard M Miller School of Medicine in 1972. He treats the problems of growth and child development. Dr. Myles currently practices at East Bay Pediatric & Medical Group and is affiliated with Alta Bates Summit Medical Center Alta Bates Campus and Children’s Hospital & Research Center Oakland.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05042830/Fouad-Abbas.jpg" />
              <Card.Body>
                <Card.Title> <h3>Dr. Fouad. M. Abbas, M.D.</h3> </Card.Title>
                <Card.Text>
                Dr. Abbas is a well-known Gynecologist/Oncologist.
                </Card.Text>
                <Card.Text>

                <p className="fw-bold">His specialization field is Oncologist of Obstetrician and Gynecology. He is also considered to be one of the best doctors of Oncology in the world. The term Oncology is the study of cancer. Dr. Abbas graduated from the University of Maryland School of Medicine in 1986. Currently, he is affiliated with Medstar Harbor Hospital and Sinai Hospital Of Baltimore.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05133453/Dr.-Khalid.png" />
              <Card.Body>
                <Card.Title> <h3>Dr. Khalid Abbed, M.D.</h3> </Card.Title>
                <Card.Text>
                Dr. Khalid is a famous doctor of Neuro.
                </Card.Text>
                <Card.Text>

                <p className="fw-bold">Dr. Khalid obtained his bachelor’s degree in Biological Sciences from the University of Illinois in Champaign-Urbana in 1993. He continued his education in the same University and received his Doctor of Medicine degree with Honors in 1999. Currently, he is working at Yale as a Director of the Spine Surgery Department. Many consider him the best doctor in the world.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05042826/DR.-MONA-M.-ABAZA.jpg" />
              <Card.Body>
                <Card.Title> <h3>Dr.Mona.M.Abaza, M.D.</h3> </Card.Title>
                <Card.Text>
                Dr. Abaza is a specialized doctor in ENT Otolaryngologist, Adenoidectomy, esophagoscopy, Nasal airway surgery, and tracheostomy.
                </Card.Text>
                <Card.Text>

                <p className="fw-bold">Dr. Abaza graduated from the Medical College of Pennsylvania in 1991. She is affiliated with Children’s Hospital Colorado At Memorial Hospital Central and the University of Colorado Hospital.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05042820/Dr.-A.-Reese-Abright.png" />
              <Card.Body>
                <Card.Title> <h3>Dr. Arthur Reese Abright, M.D.</h3> </Card.Title>
                <Card.Text>
                Dr. Reese is also one of the best doctors of Psychiatry.
                </Card.Text>
                <Card.Text>

                    <p className="fw-bold">Dr. Reese got her accreditation from The University of Texas Southwestern Medical School. She is also an expert on mood disorders and anxiety. Currently, she is working as a Professor of Psychiatry at Icahn School of Medicine at Mount Sinai. She is also affiliated with Mount Sinai Services Elmhurst Hospital Center and New York Medical College at present.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
        </Container>
       </div>
    );
};

export default AboutUs;