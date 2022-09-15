import {
    Button,
    Container,
    Col,
    Row,
    Form,
    Modal,
    InputGroup,
} from 'react-bootstrap'

export const FormInputs = (props) => {
    const { label, onChange, id, ...inputProps } = props
    return (
        <Col lg={6} >
          {/* style={{border: 'solid'}}> */}
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    <Form.Label style={{ width: '11rem' }}>
                        {' '}
                        <label htmlFor="{id}">{label}</label>
                    </Form.Label>
                    <input {...inputProps} onChange={onChange} required />
                </InputGroup.Text>
            </InputGroup>
        </Col>
    )
}
