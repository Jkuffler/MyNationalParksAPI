
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_of_the_United_States_National_Park_Service.svg"
                        style={{maxWidth: "20px", margin: "7px"}}
                        />
                    My National Parks
                </Navbar.Brand>
                <Nav>
                <Nav.Link href="/passport" >
                    My Passport
                </Nav.Link>
                <Nav.Link href="/">
                    All Parks
                </Nav.Link>
                <Nav.Link href="/account">
                    Log In
                </Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
