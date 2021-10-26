import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_of_the_United_States_National_Park_Service.svg"
                        style={{maxWidth: "20px", margin: "7px"}}
                        />
                    My National Parks
                </Navbar.Brand>
                <Nav>
                <Nav.Link >
                    My Passport
                </Nav.Link>
                <Nav.Link>
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
