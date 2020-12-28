import React from 'react'
import './Header.scss'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import { Avatar, IconButton } from '@material-ui/core'
function Header() {
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
        <Avatar
          className='avatar'
          src='https://lh3.googleusercontent.com/ogw/ADGmqu9eqmRCS3-iUdrWev4Kwe8wCmIeBB6nh-_YPMbB=s83-c-mo'
        />
      </div>
    </div>
  )
}

export default Header
