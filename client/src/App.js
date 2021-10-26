import NavBar from './NavBar'
import Body from './Body'
import LoginSignup from './LoginSignup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from "react"

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('/me')
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            console.log(user)
            setCurrentUser(user)
        })
        }
      })
  },[])
  


    return(
      <div>
        <NavBar currentUser={currentUser}/>
        <Body currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </div>
      )
}

export default App;
