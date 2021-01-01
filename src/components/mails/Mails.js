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
import MailRow from '../mail/MailRow'

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
        <Section Icon={InboxIcon} title={'Primary'} color='#D93025' selected />
        <Section Icon={PeopleIcon} title={'Social'} color='#1a73e8' />
        <Section Icon={LocalOfferIcon} title={'Promotions'} color='green' />
      </div>

      <div className='mails__list'>
        <MailRow
          title='Ramos'
          subject='Hey brother!'
          description='When is the meeting start?'
          time='10pm'
        />
        <MailRow
          title='Firebase'
          subject='Welcome to Firebase!'
          description='
          Hi Mehmet,Youre now part of a community of hundreds of thousands of developers using Firebase to build better mobile and web apps, as well as grow their businesses. Congrats on creating your first project.Please keep using firebase..'
          time='6am'
        />
      </div>
    </div>
  )
}

export default Mails
