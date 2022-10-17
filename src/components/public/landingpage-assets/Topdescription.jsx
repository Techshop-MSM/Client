import { Row,Container,Col } from 'react-bootstrap';

export function Topdescription() {
  return (
    <>
        <Container>
            <Row>
                <Col lg={4}>
                <i class="fa-regular  fa-buromobelexperte"></i>
                    15 Jahre Erfahrung im Handeln von PC-Komponenten
                </Col>
                <Col lg={4}>
                    Tausende zufriedene Kunden Weltweit
                </Col>
                <Col lg={4}>
                    24/7 Support
                </Col>
            </Row>
        </Container>
    </>
  );
}



