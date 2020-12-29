import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Mails from './components/mails/Mails'
import Mail from './components/mail/Mail'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='app__main'>
          <Sidebar />
          <Switch>
            <Route to='/mails'>
              <Mail />
            </Route>
            <Route path='/'>
              <Mails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
