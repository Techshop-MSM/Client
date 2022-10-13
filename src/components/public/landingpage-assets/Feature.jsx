import { Row,Container,Col } from 'react-bootstrap';

export function Feature() {
  return (
    <>
        <Container style={{marginTop: '20px'}}>
            <Row>
                <Col lg={4}>
                    <img src='https://www.cyberport.de/content/dam/content/03-notebook/asus-chromebook/kw2238/kw2237_cyberport_asus-chromebook-flip-14-square.jpg' className='img-Fluid mb-3' width={400}></img>
                </Col>
                <Col lg={4}>
                    <img src='https://www.cyberport.de/content/dam/content/03-notebook/fujitsu-lifebook-notebooks/kw2233/kw2233_cyberport-fujitsu-windows-11-pro-square.jpg' className='img-Fluid mb-3' width={400}></img>
                </Col>
                <Col lg={4}>
                    <img src='https://www.cyberport.de/content/dam/content/03-notebook/hp-pavilion/kw2235/kw2235_cyberport-hp-pavilion-windows-11-square.jpg' className='img-Fluid mb-3' width={400}></img>
                </Col>
            </Row>
        </Container>
    </>
  );
}
