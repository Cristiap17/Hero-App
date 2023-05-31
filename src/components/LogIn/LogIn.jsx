import React from 'react'
import './Login.css'
import LogInForm from './LogInForm'

export default function LogIn() {
  return (
    <div className='main-screen-container'>
        <h1 className='title-screen-login'>LogIn Screen</h1>
        <hr />
        <LogInForm/>
    </div>
  )
}
