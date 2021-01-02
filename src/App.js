import React, { useEffect } from 'react'
import './App.scss'
import Header from './components/header/Header'
import Mails from './components/mails/Mails'
import Mail from './components/mail/Mail'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SendMail from './components/sendMail/SendMail'
import { useDispatch, useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice'
import Login from './components/login/Login'
import { auth } from './api/firebase'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      } else {
      }
    })
  }, [])
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className='App'>
          <Header />
          <div className='app__main'>
            <Sidebar />
            <Switch>
              <Route exact path='/'>
                <Mails />
              </Route>
              <Route to='/mails'>
                <Mail />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  )
}

export default App
