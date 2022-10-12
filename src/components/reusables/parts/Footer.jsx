import { Col, Row, Button, Container, Form, Nav, Navbar, NavDropdown, Accordion } from 'react-bootstrap'
import { ImpressumDatenschutz } from '../../public/ImpressumDatenschutz'

export function Footer() {
  return (
    <>
    <Container>
      <Row>
        <Col lg={4}>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Support-Chat</Accordion.Header>
        <Accordion.Body>
        <div className="col-12 px-0" >
              <div
                className="px-4 py-5 chat-box text-white"
                style={{ backgroundColor: '#ededed33', maxHeight: '20rem', border: 'solid red' }}
              >
                    <div>
                      <div className="media w-75 mb-2">
                        <img src="" alt="" />
                        <div className="media-body ml-3">
                          <div
                            className="rounded py-2 px-3 mb-2"
                            style={{ backgroundColor: '#ededed33' }}
                          >
                            <p className="text-small mb-0">{ }</p>
                          </div>
                          <p className="small">{}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/* Sender Message */}
                <div className="media w-75 mb-2" style={{ marginLeft: 'clamp(1rem, 10%, 10rem)' }}>
                  <img src="" alt="" />
                  <div className="media-body ml-3">
                    <div
                      className="rounded py-2 px-3 mb-2"
                      style={{ backgroundColor: '#ededed33' }}
                    >
                      <p className="text-small mb-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
                        reiciendis debitis corrupti quod sit eligendi, officia placeat. Quidem,
                        laborum earum!
                      </p>
                    </div>
                    <p className="small">gfhgfh</p>
                  </div>
                </div>

                {/* Reciever Message */}
                <div className="media w-75 ml-auto mb-2">
                  <div className="media-body">
                    <div
                      className="rounded py-2 px-3 mb-2"
                      style={{ backgroundColor: '#ededed33' }}
                    >
                      <p className="text-small mb-0 text-white">
                        Apollo University, Delhi, India Test
                      </p>
                    </div>
                    <p className="small">12:00 PM | Aug 13</p>
                  </div>
                </div>
              </div>

              {/* <!-- Typing area --> */}
              <form action="#" className="bg-light">
                <div className="input-group">
                  <textarea
                    rows="5"
                    cols="60"
                    maxLength={380}
                    placeholder="schreibe eine Nachricht..."
                    className="form-control rounded-0 border-0 py-4 bg-light"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button id="button-addon2" type="submit" className="btn btn-link">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
        </Col>
      </Row>
    </Container>
    <footer className="py-5 container">
      <div className="row">
        <div className="col-lg-3">
          <img src="https://www.alternate.de/resources/pix/footer/PayPal_logo.svg" alt="" />
        </div>
        <div className="col-lg-3">
          <img
            src="https://www.alternate.de/resources/pix/footer/MC_Visa_Diner_Discover_Kombi_logo_new.svg"
            alt=""
          />
        </div>
        <div className="col-lg-3">
          <img src="https://www.alternate.de/resources/pix/footer/vorkasse_de_logo.svg" alt="" />
        </div>
        <div className="col-lg-3">
          <img
            src="https://www.alternate.de/resources/pix/footer/klarna_logo.svg"
            alt=""
            width="150"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              {' '}
              <ImpressumDatenschutz />
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}
