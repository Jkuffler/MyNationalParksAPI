import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { useState } from "react"
import {useHistory} from "react-router-dom"

function LoginSignup( { setCurrentUser }) {

    let history = useHistory()
    const [formData, setFormData] = useState({
        user_name: "",
        password: ""
    })
    const [formToggle, setFormToggle] = useState(false)
    const [confirmPassword ,setConfirmPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        
        fetch("/login", configObj)
            .then(resp => {
            if (resp.ok) {
                resp.json()
                .then(user => setCurrentUser(user))
                history.push("/")
            } else {
                resp.json().then( errors => alert(errors.error))
            }
        })
    }

    function handleSignupSubmit(e) {
        e.preventDefault()
            const signupData = {
                ...formData,
                password_confirmation: confirmPassword
            }
            console.log(signupData)
        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupData)
        }
        
        fetch("/signup", configObj)
            .then(resp => {
            if (resp.ok) {
                resp.json()
                .then(user => setCurrentUser(user))
                history.push("/")
            }
            else {
                resp.json().then( errors => alert(errors.error))
            }
        })
    }

    function handleOnChange(e) {
        let name = e.target.name
        
        setFormData( {
            ...formData,
            [name]: e.target.value
        })
    }

    return(
        <div className="login">
            {!formToggle? 
            <Container size="small"  >
            <Form inline className="login" align="center" onSubmit={handleSubmit}>
            <Form.Label>Login</Form.Label>
            <Stack gap={5} className="col-md-5 mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >                
                    <Form.Control type="username" placeholder="Enter Username" name="user_name" value={formData.name} onChange={handleOnChange}/>
                        {/* <input type="text" name="user_name" value={formData.name} onChange={handleOnChange}></input> */}
                </Form.Group>
            </Stack>
            <Stack gap={5} className="col-md-5 mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleOnChange} autoComplete="off"/>
                        {/* <input type="password" name="password" value={formData.password} onChange={handleOnChange} autoComplete="off"> */}
                <div>
                <Button type="submit" variant="success">Submit</Button>
                
                </div>
                
                </Form.Group>
                </Stack>
            </Form>
            <Button className="signup" align="center" onClick={() => setFormToggle(!formToggle)}>Sign Up</Button>
            </Container>
                :
            <Container size="small"  > 
            <Form inline className="login" align="center" onSubmit={handleSignupSubmit}>
            <Form.Label>Sign Up</Form.Label>
            <Stack gap={5} className="col-md-5 mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >                
                    <Form.Control type="username" placeholder="Enter Username" name="user_name" value={formData.name} onChange={handleOnChange}/>
                        {/* <input type="text" name="user_name" value={formData.name} onChange={handleOnChange}></input> */}
                </Form.Group>
            </Stack>
            <Stack gap={5} className="col-md-5 mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleOnChange} autoComplete="off"/>
                        {/* <input type="password" name="password" value={formData.password} onChange={handleOnChange} autoComplete="off"> */}
                <div>
                        <Form.Control type="password" name="confirm_password" placeholder="Confirm Password" autoComplete="off" onChange={(e) => setConfirmPassword(e.target.value)}/> 
                <Button type="submit" variant="success">Submit</Button>
                </div>
                
                </Form.Group>
                </Stack>
            </Form>
            <Button className="signup" align="center" onClick={() => setFormToggle(!formToggle)}>Log In</Button>
            
            </Container>
            }

        </div>
    )
}

export default LoginSignup