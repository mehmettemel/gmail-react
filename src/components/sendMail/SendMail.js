import React from 'react'
import './SendMail.scss'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../../features/mailSlice'
function SendMail() {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className='sendMail__close'
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          type='text'
          placeholder='To'
          ref={register({ required: true })}
        />
        {errors.to && <p className='sendMail__error'>To is required</p>}
        <input
          name='subject'
          type='text'
          placeholder='Subject'
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className='sendMail__error'>Subject is required</p>
        )}
        <textarea
          name='message'
          type='text'
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className='sendMail__error'>message is required</p>
        )}
        <div className='sendMail__options'>
          <Button
            color='primary'
            variant='contained'
            type='submit'
            className='sendMail__send'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail