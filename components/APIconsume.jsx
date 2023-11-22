import React, { useEffect, useState } from 'react'

const APIconsume = () => {


    const [dataAPI, setDataAPI] = useState([])
    const [dataUser, setDataUser] = useState()

    const apiCall = async (num) => {
        try{ 
          const fetchUrl = await fetch(`https://randomuser.me/api/?results=${num}`)
          const data = await fetchUrl.json()
          console.log(data.results)
  
        }catch(error){error,"error detected"}
      }
    
  return (
    <div>
        <input onChange={(e)=>{setDataUser(e.target.value)}} type='number'></input>
        <button onClick={()=>{apiCall(dataUser)}}>Search</button>
    </div>
  )
}

export default APIconsume