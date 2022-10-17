import {Popover , OverlayTrigger,  Col, Container, Row, Button, ButtonGroup, ButtonToolbar, Card,Form,Tabs,ListGroup, Table, Accordion, Tab, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { ComparingModal } from './ComparingModal';

export function Megatest() {

  return (
    <>
    <Navbar style={{backgroundColor: 'red', zIndex: '8', maxHeight: '50px' }} className='sticky'>
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

              <Container>
                <Row style={{overflow: 'scroll'}}>
                <Col lg={4} md={6} sm={6} xs={6} className='border mb-4' >
                  <Col lg={6}  style={{display: 'inline-block'}}>
                      <img src="https://www.turn-on.de/media/cache/article_images/media/cms/2019/12/Mainboard-PC.jpeg?469077" alt="" className={'img-fluid'} style={{marginTop: '30px'}}/>
                    </Col>
                    <Col lg={6} style={{display: 'inline-block', padding: '10px'}}>
                      <p>Finde dein perfektes Mainbard für dein nächstes Abenteuer</p>
                    </Col>
                    <Button variant="secondary" size="sm" style={{width: '100%'}}>
                      Zu den Mainboards
                    </Button>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6} className='border mb-4'>
                  <Col lg={6}  style={{display: 'inline-block'}}>
                      <img src="https://heise.cloudimg.io/width/696/q50.png-lossy-50.webp-lossy-50.foil1/_www-heise-de_/imgs/18/3/5/9/0/8/9/2/RAM_Arbeitsspeicher_ct.jpg-8e756f1bea7a52cc.jpeg" alt="" className={'img-fluid'} style={{marginTop: '30px'}}/>
                    </Col>
                    <Col lg={6} style={{display: 'inline-block', padding: '10px'}}>
                      <p>Die Größe ist nicht alles! Achte auch auf die Geschwindigkeit.</p>
                    </Col>
                    <Button variant="secondary" size="sm" style={{width: '100%', paddingBottom: '0px'}}>
                      Zu den Arbeitsspeicher
                    </Button>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6} className='border mb-4' >
                  <Col lg={6}  style={{display: 'inline-block'}}>
                      <img src="https://www.pcbuildersclub.com/wp-content/uploads/2018/04/Grafikkarten-Feature-Mockup.png" alt="" className={'img-fluid'} style={{marginTop: '30px'}}/>
                    </Col>
                    <Col lg={6} style={{display: 'inline-block', padding: '10px'}}>
                      <p>Auch in klein gaaaaanz groß</p>
                    </Col>
                    <Button variant="secondary" size="sm" style={{width: '100%'}}>
                      Zu den Grafikkarten
                    </Button>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6} className='border mb-4' >
                  <Col lg={6}  style={{display: 'inline-block'}}>
                      <img src="https://image.stern.de/31632566/t/X6/v4/w1440/r1.7778/-/gaming-pc-gehaeuse.jpg" alt="" className={'img-fluid'} style={{marginTop: '30px'}}/>
                    </Col>
                    <Col lg={6} style={{display: 'inline-block', padding: '10px'}}>
                      <p>Dein Gehäuse, dein Style. Finde das beste Gehäuse für dein Arbeitsplatz</p>
                    </Col>
                    <Button variant="secondary" size="sm" style={{width: '100%'}}>
                      Zu den Gehäusen
                    </Button>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6} className='border mb-4' >
                  <Col lg={6}  style={{display: 'inline-block'}}>
                      <img src="https://heise.cloudimg.io/width/600/q75.png-lossy-75.webp-lossy-75.foil1/_www-heise-de_/tipps-tricks/imgs/96/2/3/2/6/7/9/5/hard-drive-607461_1920-25272704c6663970.jpeg" alt="" className={'img-fluid'} style={{marginTop: '30px'}}/>
                    </Col>
                    <Col lg={6} style={{display: 'inline-block', padding: '10px'}}>
                      <p>Größer, schneller, weiter. Festplatten und SSD´s der Speicher für deine Daten</p>
                    </Col>
                    <Button variant="secondary" size="sm" style={{width: '100%'}}>
                      Zu den Festplatten
                    </Button>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6} className='border mb-4' >
                  <Col lg={6}  style={{display: 'inline-block'}}>
                      <img src="https://pics.computerbase.de/8/7/9/5/3/article-1280x720.f931f39a.jpg" alt="" className={'img-fluid'} style={{marginTop: '30px'}}/>
                    </Col>
                    <Col lg={6} style={{display: 'inline-block', padding: '10px'}}>
                      <p>Turn on. Kein Strom, kein Spaß! Das Netzteil deiner Wahl.</p>
                    </Col>
                    <Button variant="secondary" size="sm" style={{width: '100%'}}>
                      Zu den Netzteilen
                    </Button>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6} className='border mb-4' >
                  <Col lg={6}  style={{display: 'inline-block'}}>
                      <img src="https://i.computer-bild.de/imgs/1/3/9/5/0/2/4/3/Intel-Alder-Lake.jpeg-c53f474a0afa3963.jpg?impolicy=full_content" alt="" className={'img-fluid'} style={{marginTop: '30px'}}/>
                    </Col>
                    <Col lg={6} style={{display: 'inline-block', padding: '10px'}}>
                      <p>AMD oder Intel? Egal, finde die beste CPU für dein PC</p>
                    </Col>
                    <Button variant="secondary" size="sm" style={{width: '100%'}}>
                      Zu den Prozessoren
                    </Button>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6} className='border mb-4' >
                  <Col lg={6}  style={{display: 'inline-block'}}>
                      <img src="https://www.golem.de/2001/145986-219167-219166_rc.jpg" alt="" className={'img-fluid'} style={{marginTop: '30px'}}/>
                    </Col>
                    <Col lg={6} style={{display: 'inline-block', padding: '10px'}}>
                      <p>Kein Durchblick? Dann finde bei uns dein neuen Bildschirm und du wirst Augen machen</p>
                    </Col>
                    <Button variant="secondary" size="sm" style={{width: '100%'}}>
                      Zu den Bildschirmen
                    </Button>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6} className='border mb-4' >
                  <Col lg={6}  style={{display: 'inline-block'}}>
                      <img src="https://www.pcgameshardware.de/screenshots/1020x/2008/02/xonarav1-triplehdmi.jpg" alt="" className={'img-fluid'} style={{marginTop: '30px'}}/>
                    </Col>
                    <Col lg={6} style={{display: 'inline-block', padding: '10px'}}>
                      <p>Kein Sound? Kein Problem! Hier knarzt und kratzt nicht mehr den unsere Soundkarten "ballern" richtig</p>
                    </Col>
                    <Button variant="secondary" size="sm" style={{width: '100%'}}>
                      Zu den Soundkarten
                    </Button>
                  </Col>
                </Row>
              </Container>
              </Popover.Body>
            </Popover>
          }
        >
          <Button  
              style={{marginRight: '50px'}}       
             className="hvr-rectangle-out testbtn btn"
             variant="secondary">Menu
             <img src="../../../../public/images/bars-solid.svg" alt="" style={{width: '20px', paddingLeft: '5px'}} />
          </Button>
        </OverlayTrigger>
      ))}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

        <Navbar.Text style={{paddingRight: '10px'}}>
          </Navbar.Text>
          <Navbar.Text style={{color: '#fff'}}>
            Du bist: <a href="#login" style={{color: '#fff', fontWeight: 'bold'}}>Mark Otto</a>
          </Navbar.Text>
          <Navbar.Text style={{paddingRight: '10px'}}>
            <div style={{marginLeft: '20px', marginTop: '10px'}}>
              <div style={{padding: '5px', border: '1px solid #fff', borderRadius: '100%', display: 'inline-block', marginRight: '10px', marginBottom: '10px'}}>
                <i className="fab fa-facebook-f"></i>   
              </div>

              <div style={{padding: '5px', border: '1px solid #fff', borderRadius: '100%', display: 'inline-block'}}>
                <i className="fab fa-github"></i>
              </div>
            </div>
          </Navbar.Text>
          <ComparingModal/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}



