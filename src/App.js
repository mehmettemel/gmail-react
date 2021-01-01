import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Mails from './components/mails/Mails'
import Mail from './components/mail/Mail'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SendMail from './components/sendMail/SendMail'
import { useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  return (
    <Router>
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
    </Router>
  )
}

export default App
