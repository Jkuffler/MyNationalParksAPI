
import { useState } from "react"

function LoginSignup( { setCurrentUser }) {

    const [formData, setFormData] = useState({
        user_name: "",
        password: ""
    })

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
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <label>Username:</label>
                    <input type="text" name="user_name" value={formData.name} onChange={handleOnChange}>
                    </input>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleOnChange} autoComplete="off">
                </input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default LoginSignup