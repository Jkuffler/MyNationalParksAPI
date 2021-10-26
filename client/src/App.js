import NavBar from './NavBar'
import Body from './Body'
import LoginSignup from './LoginSignup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  console.log(currentUser)

    return(
      <div>
      <NavBar/>
      <Body/>
      <LoginSignup setCurrentUser={setCurrentUser}/>
      </div>
      )
}

export default App;
