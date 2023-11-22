import React, { useState } from 'react'

const DeleteRepeatedWords = () => {

  const [userSentence, setUserSentence] = useState();

  const handleDetected = ()=>{
    const copyArr = structuredClone(userSentence.split(" "))
    const detected = new Set(copyArr)
    console.log(detected)

  }

  return (
    <>
    <input placeholder='Write a sentence' onChange={(e)=>{setUserSentence(e.target.value)}}></input>
    <button onClick={()=>{handleDetected()}}>Delete repeated words</button>
    </>
  )
}

export default DeleteRepeatedWords