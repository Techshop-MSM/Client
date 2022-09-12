import { Button, Container, Col, Row, Form, Modal,InputGroup } from "react-bootstrap";



export const FormInputs = (props) => {
    const {label, onChange, id, ...inputProps} = props
    return(
        <Container>
            <Row>
                <Col lg={6}>


    <Form.Label> <label htmlFor="{id}">{label}</label></Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        <input  {...inputProps} onChange={onChange} required />
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      </Col>
      </Row>
        </Container>
    )
}