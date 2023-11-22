import React, { useState } from 'react'

const FormPassword = () => {

    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()
  return (
    <>
    <h3>User</h3>
    <input type='text' placeholder='User name' onChange={(e)=>{setUserName(e.target.value)}}></input>
    <h3>Password</h3>
    <input type='password' placeholder='User password' onChange={(e)=>{setUserPassword(e.target.value)}}></input>
    </>
  )
}

export default FormPassword