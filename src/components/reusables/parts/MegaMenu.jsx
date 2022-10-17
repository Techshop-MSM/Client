import {Popover , OverlayTrigger,  Col, Container, Row, Button, ButtonGroup, ButtonToolbar, Card,Form,Tabs,ListGroup, Table, Accordion, Tab, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Tooltip from 'react-bootstrap/Tooltip';
import { ComparingModal } from './ComparingModal';

export function MegaMenu() {
  return (
    <>
    <Container className='sticky' fluid style={{backgroundColor: 'red', height: '55px'}}>
      <Row>
        <Col lg={12} className='pt-2'>
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
             variant="secondary">Popover on {placement}
          </Button>
        </OverlayTrigger>
      ))}


      <div style={{display: 'inline-block'}} className='center'>
        <img style={{display: 'inline-block'}} src="https://png.pngtree.com/element_our/png_detail/20181011/facebook-social-media-icon-design-template-vector-png_127003.png" alt="" width={50}/>
        <img style={{display: 'inline-block'}} src="https://png.pngtree.com/element_our/png_detail/20181011/facebook-social-media-icon-design-template-vector-png_127003.png" alt="" width={50}/>
        <img style={{display: 'inline-block'}} src="https://png.pngtree.com/element_our/png_detail/20181011/facebook-social-media-icon-design-template-vector-png_127003.png" alt="" width={50}/>
        <img style={{display: 'inline-block'}} src="https://png.pngtree.com/element_our/png_detail/20181011/facebook-social-media-icon-design-template-vector-png_127003.png" alt="" width={50}/>
        <img style={{display: 'inline-block'}} src="https://png.pngtree.com/element_our/png_detail/20181011/facebook-social-media-icon-design-template-vector-png_127003.png" alt="" width={50}/>
      </div>

      <ComparingModal/>
      </Col>
      </Row>
      </Container>
    </>
  );
}