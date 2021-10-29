import {useHistory} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar( {currentUser} ) {
    let history = useHistory()

    function handleLogout(){
        console.log("fired!")
        fetch("/logout", {method: "DELETE"})
        history.push("/")
    }

    function handlePassportClick() {
        !currentUser ? alert('You must log in') : console.log('cool!')
    }

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
                <Nav.Link href="/passport" onClick={handlePassportClick}>
                    My Passport
                </Nav.Link>
                <Nav.Link href="/">
                    All Parks
                </Nav.Link>
                { currentUser ? 
                    <Nav.Link onClick={handleLogout} href="/">
                        Log Out
                    </Nav.Link>
                    : <Nav.Link href="/account">
                        Log In
                    </Nav.Link> }           
                </Nav>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
