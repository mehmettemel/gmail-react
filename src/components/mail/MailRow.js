import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './MailRow.scss'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { useHistory } from 'react-router-dom'
function MailRow({ id, title, subject, description, time }) {
  const history = useHistory()

  return (
    <div onClick={() => history.push('/mail')} className='mailRow'>
      <div className='mailRow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className='mailRow__title'>{title}</div>
      <div className='mailRow__message'>
        <h4>
          {subject} -{' '}
          <span className='mailRow__description'>{description}</span>
        </h4>
      </div>
      <p className='mailRow__time'>{time}</p>
    </div>
  )
}

export default MailRow
