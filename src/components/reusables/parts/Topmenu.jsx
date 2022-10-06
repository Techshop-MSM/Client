import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LogInModal } from '../../userValidation/LogInModal'
import { ShoppingCartPreview } from '../parts/ShoppingCartPreview'
import { Whishlist } from './whishlist'

export function Topmenu() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="../../../../public/images/logo.png" alt="" />
          </Navbar.Brand>

          <Form className="d-flex w-50" style={{ margin: 'auto' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: '75%', borderRadius: '1rem 0 0 1rem' }}
            />
            <Button
              variant="outline-success w-25 bg-danger"
              style={{
                color: '#fff',
                width: '75%',
                fontWeight: 'bolder',
                borderRadius: '0 1rem 1rem 0',
              }}
            >
              Search
            </Button>
          </Form>
          <Whishlist />
          <ShoppingCartPreview />
          <LogInModal />
        </Container>
      </Navbar>
    </>
  )
}
