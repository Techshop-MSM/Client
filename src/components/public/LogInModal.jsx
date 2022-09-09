import React, { useState } from "react";
import { Button, Container, Col, Row, Form, Modal, Tabs,Tab } from "react-bootstrap";

export function LogInModal() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button className="bg-green" onClick={() => setLgShow(true)}>LogIn / Register</Button>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="color-green">
          <Modal.Title id="example-modal-sizes-title-lg" >Kontakt</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Tabs
      defaultActiveKey="LogIn"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="LogIn" title="LogIn" >
      <Container style={{color: '#fff'}}>
      <Row>
        <Col lg={8}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Benutzername</Form.Label>
        <Form.Control type="username" placeholder="Benutzername" />
      </Form.Group>
        </Col>
        <Col lg={4}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Passwort</Form.Label>
        <Form.Control type="password" placeholder="Passwort" />
      </Form.Group>
        </Col>
      </Row>
    </Container>
      <Form>

      <Button variant="primary" type="submit">
        Anmelden
      </Button>
    </Form>

 </Tab>
      <Tab eventKey="register" title="Registrieren">
      <section className="h-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://m.media-amazon.com/images/M/MV5BMTU5NTY4MjY0M15BMl5BanBnXkFtZTgwODI1NzMzMzI@._V1_.jpg"
                alt="Sample photo" className="img-fluid"/>
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Jetzt kostenlosen Account erstellen</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m">Vorname</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n">Nachnahme</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m1">Geburtsdatum</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example8">Adresse</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" for="femaleGender">Frau</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="maleGender">Mann</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" for="otherGender">Andere</label>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">????</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">???</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example9">Anderes Feld</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example90" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example90">Anderes Feld</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example99">Anderes Feld</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example97">Anderes Feld</label>
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">Alles Zurücksetzen</button>
                  <button type="button" className="btn btn-warning btn-lg ms-2">Absenden</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </Tab>
    </Tabs>

        </Modal.Body>
      </Modal>
    </>
  );
}
