import { Button, Container, Col, Row, Form, Modal, Tabs,Tab } from "react-bootstrap";



export const FormInputs = (props) => {
    const {label, onChange, id, ...inputProps} = props
    return(
        <Container>
            <Row>
            <Col lg={4}>
            <label htmlFor="{id}" style={{width: '200px'}}>{label}</label>
            <input  {...inputProps} onChange={onChange}/>
            </Col>
                <Col lg={4}>
            <label htmlFor="{id}" style={{width: '200px'}}>{label}</label>
            <input  {...inputProps} onChange={onChange}/>
            </Col>
            </Row>
        </Container>
    )
}