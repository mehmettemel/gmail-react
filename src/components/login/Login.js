import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../../api/firebase'
import { login } from '../../features/userSlice'
import './Login.scss'
function Login() {
  const dispatch = useDispatch()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63'
          alt=''
        />
        <Button
          className='login__button'
          variant='contained'
          color='primary'
          onClick={signIn}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
