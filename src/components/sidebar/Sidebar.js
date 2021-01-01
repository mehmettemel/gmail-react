import { Button } from '@material-ui/core'
import React from 'react'
import './Sidebar.scss'
import SidebarOption from './sidebarOption/SidebarOption'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SendIcon from '@material-ui/icons/Send'
import DescriptionIcon from '@material-ui/icons/Description'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import ChatIcon from '@material-ui/icons/Chat'
import ScheduleIcon from '@material-ui/icons/Schedule'
import MailIcon from '@material-ui/icons/Mail'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import SettingsIcon from '@material-ui/icons/Settings'
import VideocamIcon from '@material-ui/icons/Videocam'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../features/mailSlice'
function Sidebar() {
  const dispatch = useDispatch()
  return (
    <div className='sidebar'>
      <button
        className='sidebar__compose hovered'
        onClick={() => dispatch(openSendMessage())}
      >
        <AddIcon />
        <span>Compose</span>
      </button>
      <SidebarOption Icon={InboxIcon} title='Inbox' colorRed />
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' />
      <SidebarOption Icon={SendIcon} title='Sent' />
      <SidebarOption Icon={DescriptionIcon} title='Drafts' />
      <SidebarOption Icon={StarIcon} title='Starred' />
      <SidebarOption Icon={LabelImportantIcon} title='Important' />
      <SidebarOption Icon={ChatIcon} title='Chats' />
      <SidebarOption Icon={ScheduleIcon} title='Scheduled' />
      <SidebarOption Icon={MailIcon} title='All Mail' />
      <SidebarOption Icon={ErrorIcon} title='Spam' />
      <SidebarOption Icon={DeleteIcon} title='Trash' />
      <SidebarOption Icon={SettingsIcon} title='Manage labels' />
      <SidebarOption Icon={AddIcon} title='Create new label' />
      <div className='sidebar__footer'>
        <div className='title'>Meet</div>
        <SidebarOption Icon={VideocamIcon} title='New meeting' />
        <SidebarOption Icon={AssignmentIcon} title='Join a meeting' />
      </div>
    </div>
  )
}

export default Sidebar
