<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LogInModal } from '../../userValidation/LogInModal'
import { ShoppingCartPreview } from '../parts/ShoppingCartPreview'
 
=======
import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AppContext } from '../../global/useContext'
import { LogInModal } from '../../userValidation/LogInModal'
import { UserLogout } from '../../userValidation/logout/logout'
import { ShoppingCartPreview } from './ShoppingCartPreview'
>>>>>>> 52d233e07b263caa1d980b2a3322468845cf71c9

export function Topmenu() {
    const { token } = useContext(AppContext)
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">TecShopMMS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown
                                title="Link"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="#action3">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button
                                variant="outline-success"
                                style={{ margin: '0 2rem 0 0.25rem' }}
                            >
                                Search
                            </Button>
                        </Form>
                        {token ? <UserLogout /> : <LogInModal />}
                        <ShoppingCartPreview />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
