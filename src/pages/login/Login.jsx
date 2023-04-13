// styles
import styles from './Login.module.css';

import React, { useState } from 'react'

export default function Login() {
  const [name , setName ] = useState("")
  const [password , setPassword ] = useState(0)


  return (
      <form className={styles['login-form']} onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Name:
          <input 
          type='text'
          id='name'
          onChange={() => setName(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          Password:
          <input
          type='password'
          id='id'
          onChange={() => setPassword(e.target.password)}
          />
        </label>
      </form>
  
  )
}
