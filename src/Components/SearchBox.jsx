import React, { useState } from 'react'
import '../Styles/Searched/box.css'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function SearchBox() {
    const defData = useSelector(data=>data.data)
    const srch = useSelector(data=>data.search)
    const theme = useSelector(data=>data.theme)
    const [data,setData] = useState(null)
    const lng = useSelector(data=>data.lang)
    const navigate = useNavigate()
    useEffect(()=>{
      if(defData === null){
        console.log('no')
      }else{
        setData(defData.filter(res=>res.nameEN.toLowerCase().includes(srch.toLowerCase())))
      }
    },[srch])
    console.log(data)
  return (
    <>
    {srch.length > 0 &&
    <div className='searchedbox'>
      {/* If Not 4 Letters */}
      {!data || data.length === 0 &&
      <div className='searched-nth'>Nothing Found</div>
      }
    <div className='box-grid'>
      {data && data.map(res=>
        <div key={res._id} onClick={()=>navigate(`/all/${res._id}`)} className='searched-item'>
          <img src={res.image} alt="iBeauty" className='box-grid-img' />
          <center><p className={theme?'box-grid-name':'box-grid-name-dark'}>{lng==='en'?res.nameEN:res.nameSp}</p></center>
        </div>)}
    </div>
    </div>
    } 
    </>
  )
}
