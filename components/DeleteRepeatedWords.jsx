import React, { useState } from 'react'

const DeleteRepeatedWords = () => {

  const [userSentence, setUserSentence] = useState()
  return (
    <>
    {userSentence}
    <input placeholder='Write a sentence' onChange={(e)=>{setUserSentence(e.target.value)}}></input>
    <button onClick={()=>{}}>Delete repeated words</button>
    </>
  )
}

export default DeleteRepeatedWords