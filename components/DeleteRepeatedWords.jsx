import React, { useState } from 'react'

const DeleteRepeatedWords = () => {

  const [userSentence, setUserSentence] = useState();

  const [newSentence, setNewSentence] = useState()

  const handleDetected = ()=>{
    const words = userSentence.split(" ");
    const detected = [...new Set(words)];
    const sentence = detected.join(' ')
    
    setNewSentence(sentence)
  }

  return (
    <>
    <input placeholder='Write a sentence' onChange={(e)=>{setUserSentence(e.target.value)}}></input>
    <button onClick={()=>{handleDetected()}}>Delete repeated words</button>
    {newSentence}
    </>
  )
}

export default DeleteRepeatedWords