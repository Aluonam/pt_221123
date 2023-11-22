import React, { useState } from 'react'

const DeleteRepeatedWords = () => {

  const [userSentence, setUserSentence] = useState();

  const handleDeleteWord = ()=>{
    const copySentence = structuredClone(userSentence);
    const words = copySentence.split(" ")
    const detectedRepeated = words.filter((oneWord, index, arr)=>{
      return arr.indexOf(oneWord) != index
    })
    console.log(detectedRepeated)
  }

  return (
    <>
    <input placeholder='Write a sentence' onChange={(e)=>{setUserSentence(e.target.value)}}></input>
    <button onClick={()=>{handleDeleteWord()}}>Delete repeated words</button>
    </>
  )
}

export default DeleteRepeatedWords