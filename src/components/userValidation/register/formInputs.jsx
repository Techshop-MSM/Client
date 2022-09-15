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

    const labelWidth = { width: '11rem' }

    return (
        <Col lg={6} md={6} xs={12} style={{border: 'solid'}}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    <Form.Label style={labelWidth}>
                        {' '}
                        <label htmlFor="{id}">{label}</label>
                    </Form.Label>
                    <input {...inputProps} onChange={onChange} required />
                </InputGroup.Text>
            </InputGroup>
        </Col>
    )
}
