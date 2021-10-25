import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>My National Parks</Navbar.Brand>
                <Nav>
                <Nav.Link >
                    My Parks
                </Nav.Link>
                <Nav.Link href="/roasters">
                    All Parks
                </Nav.Link>
                <Nav.Link>
                    Log In
                </Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar