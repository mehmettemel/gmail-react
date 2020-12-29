import React from 'react'
import './Mails.scss'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import InboxIcon from '@material-ui/icons/Inbox'
import Section from '../section/Section'

import PeopleIcon from '@material-ui/icons/People'

import LocalOfferIcon from '@material-ui/icons/LocalOffer'

function Mails() {
  return (
    <div className='mails'>
      <div className='mails__settings'>
        <div className='mails__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='mails__settingsRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>
      <div className='mails__sections'>
        <Section Icon={InboxIcon} title={'Primary'} color='red' selected />
        <Section Icon={PeopleIcon} title={'Social'} color='#1a73e8' />
        <Section Icon={LocalOfferIcon} title={'Promotions'} color='green' />
      </div>
    </div>
  )
}

export default Mails
