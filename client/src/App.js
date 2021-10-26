import NavBar from './NavBar'
import Body from './Body'
import LoginSignup from './LoginSignup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom";

function App() {

  const [viewVisitCard, setViewVisitCard] = useState(false)

  const [currentUser, setCurrentUser] = useState(null)

  function onPassportClick() {
    setViewVisitCard(true)
}
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
        <NavBar onPassportClick={onPassportClick}/>
        <Switch>
          <Route exact path = "/">
            <Body viewVisitCard={viewVisitCard} currentUser={currentUser}/>
          </Route>
          <Route exact path = "/account">
            <LoginSignup setCurrentUser={setCurrentUser}/>
            </Route>
      </Switch>
      </div>
      )
}

export default App;
