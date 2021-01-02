import React, { useEffect, useState } from 'react'
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
import { db } from '../../api/firebase'

function Mails() {
  const [mails, setMails] = useState([])

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setMails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])
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
        {mails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <MailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  )
}

export default Mails
