import React from 'react'
import './Header.scss'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import { Avatar, IconButton, Tooltip } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../api/firebase'
function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png'
          alt=''
        />
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail' />
        <IconButton>
          <ArrowDropDownIcon className='header__inputCaret' />
        </IconButton>
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <Tooltip title='Click to Sign Out' aria-label='Click to Sign Out'>
          <Avatar onClick={signOut} className='avatar' src={user?.photoUrl} />
        </Tooltip>
      </div>
    </div>
  )
}

export default Header
