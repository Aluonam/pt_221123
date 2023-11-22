import React, { useEffect, useState } from 'react'

const APIconsume = () => {


    const [dataAPI, setDataAPI] = useState([])
    const [dataUser, setDataUser] = useState()

    const apiCall = async (num) => {
        try{ 
          const fetchUrl = await fetch(`https://randomuser.me/api/?results=${num}`)
          const data = await fetchUrl.json()
          setDataAPI(data.results)
  
        }catch(error){error,"error detected"}
      }
    
      const tableUserData = dataAPI.map((person)=>{
        return(
            <>
            <ul>
                <li>
                   {person.name.first} {person.name.last}
                </li>
            </ul>
            
            </>
        )
      })
  return (
    <div>
        <h3>API CALL</h3>
        <h5>Write a number for view person</h5>
        <input onChange={(e)=>{setDataUser(e.target.value)}} type='number'></input>
        <button onClick={()=>{apiCall(dataUser)}}>Search</button>
        {tableUserData}
    </div>
  )
}

export default APIconsume