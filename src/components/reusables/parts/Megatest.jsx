import {Popover , OverlayTrigger,  Col, Container, Row, Button, ButtonGroup, ButtonToolbar, Card,Form,Tabs,ListGroup, Table, Accordion, Tab, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { ComparingModal } from './ComparingModal';

export function Megatest() {

  return (
    <>
    <Navbar style={{backgroundColor: 'red'}}>
      <Container>
        <Navbar.Brand href="#home">
        {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          style={{display: 'inline-block'}}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header style={{width: '80vmax'}} ></Popover.Header>
              <Popover.Body style={{ backgroundColor: '#fff', width: '80vmax'}}>
              <ButtonToolbar aria-label="Toolbar with button groups">


              <Container className='border'>
                <Row>
                  <Col className='border'>1 of 2</Col>
                  <Col className='border'>2 of 2</Col>
                </Row>
                <Row>
                  <Col className='border'>1 of 3</Col>
                  <Col className='border'>2 of 3</Col>
                  <Col className='border'>3 of 3</Col>
                </Row>
              </Container>



                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button href='/shop'>Shop</Button> <Button>2</Button> <Button>3</Button>{' '}
                    <Button>4</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2" aria-label="Second group">
                    <Button>5</Button> <Button>6</Button> <Button>7</Button>
                  </ButtonGroup>
                  <ButtonGroup aria-label="Third group">
                    <Button>8</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
                    <Button>4</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2" aria-label="Second group">
                    <Button>5</Button> <Button>6</Button> <Button>7</Button>
                  </ButtonGroup>
                  <ButtonGroup aria-label="Third group">
                    <Button>8</Button>
                  </ButtonGroup>
                </ButtonToolbar>
                <br></br>
                <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
                    <Button>4</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2" aria-label="Second group">
                    <Button>5</Button> <Button>6</Button> <Button>7</Button>
                  </ButtonGroup>
                  <ButtonGroup aria-label="Third group">
                    <Button>8</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
                    <Button>4</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2" aria-label="Second group">
                    <Button>5</Button> <Button>6</Button> <Button>7</Button>
                  </ButtonGroup>
                  <ButtonGroup aria-label="Third group">
                    <Button>8</Button>
                  </ButtonGroup>
                </ButtonToolbar>
                <br></br>
                <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
                    <Button>4</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2" aria-label="Second group">
                    <Button>5</Button> <Button>6</Button> <Button>7</Button>
                  </ButtonGroup>
                  <ButtonGroup aria-label="Third group">
                    <Button>8</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
                    <Button>4</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2" aria-label="Second group">
                    <Button>5</Button> <Button>6</Button> <Button>7</Button>
                  </ButtonGroup>
                  <ButtonGroup aria-label="Third group">
                    <Button>8</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Popover.Body>
            </Popover>
          }
        >
          <Button         
             className="hvr-rectangle-out testbtn btn"
             variant="secondary">Menu
          </Button>
        </OverlayTrigger>
      ))}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            <ComparingModal/>
          </Navbar.Text>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}



