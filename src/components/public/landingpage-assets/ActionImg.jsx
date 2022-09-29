import { Row,Container,Col } from 'react-bootstrap';

export function ActionImg() {
  return (
    <>
        <Container style={{marginTop: '20px'}}>
            <Row>
                <Col lg={12}>
                <img src='https://www.alternate.de/tw/mar-86201/teaser/desktop/MAR-86201_Cont_d.jpg' className='img-Fluid'></img>
                </Col>
            </Row>
        </Container>
    </>
  );
}