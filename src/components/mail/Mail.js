import { IconButton } from '@material-ui/core'
import React from 'react'
import './Mail.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArchiveIcon from '@material-ui/icons/Archive'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ScheduleIcon from '@material-ui/icons/Schedule'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useHistory } from 'react-router-dom'

function Mail() {
  const history = useHistory()
  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton onClick={() => history.push('/')}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <MarkunreadMailboxIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <ScheduleIcon />
          </IconButton>

          <IconButton>
            <CreateNewFolderIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='mail__toolsRight'>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>Subject</h2>
          <LabelImportantIcon className='mail__important' />
          <p>Title</p>
          <p className='mail__time'>10pm</p>
        </div>
        <div className='mail__message'>
          <p>message</p>
        </div>
      </div>
    </div>
  )
}

export default Mail
