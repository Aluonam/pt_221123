import React, { useEffect, useState } from 'react'

const APIconsume = () => {


    const [dataAPI, setDataAPI] = useState([])
    const [dataUser, setDataUser] = useState()


    
  return (
    <div>APIconsume
        <input onChange={()=>{}}></input>
        <button onClick={()=>{apiCall()}}>Search</button>
    </div>
  )
}

export default APIconsume