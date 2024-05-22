import React, { useEffect } from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'

import '../Styles/New Items/newItems.css'

export default function NewItems() {
    const theme = useSelector(data=>data.theme)
    const lang = useSelector(data=>data.lang)
    const [limData,setLimData] = useState(null)
    useEffect(()=>{
const getLimData = async () => {
    const res = await fetch('https://ibeaury-back.onrender.com/data/lim')
    const json = await res.json()
    setLimData(json)
}
getLimData()
    },[])
  return (
    <div className={theme?'newItems':'newItems-dark'}>
    <center><p className='offers-name'>{lang=='en'?'New Offers':'Nuevas ofertas'}</p></center>
    <center><div className={theme?'offers':'offers-dark'}>
    {limData && limData.map(res=>
    <div key={res._id} className={theme?'offers-box':'offers-box-dark'}>
      <img src={res.image} alt="Image" className='offers-images' />
      <p className={theme?'offers-name-item':'offers-name-item-dark'}>{lang=='en'?res.nameEN:res.nameSp}</p>
    </div>)}
    </div></center>
    </div>
  )
}
