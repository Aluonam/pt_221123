import React, { useEffect, useState } from 'react'

const APIconsume = () => {


    const [dataAPI, setDataAPI] = useState([])
    const [dataUser, setDataUser] = useState()

    const apiCall = async () => {
        try{ 
          const fetchUrl = await fetch(`https://randomuser.me/api/?results=5`)
          const data = await fetchUrl.json()
          console.log(data.results)
  
        }catch(error){error,"error detected"}
      }
    
  return (
    <div>APIconsume
        <input onChange={()=>{}}></input>
        <button onClick={()=>{apiCall()}}>Search</button>
    </div>
  )
}

export default APIconsume