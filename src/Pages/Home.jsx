import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Ad from '../Home Components/Ad'
import InfoHome from '../Home Components/InfoHome'
import {useDispatch, useSelector} from 'react-redux'
import { DefDataAct } from '../Redux/Action/DefDataAct'
import NewItems from '../Home Components/NewItems'
import '../Styles/Home/home.css'
import SearchBox from '../Components/SearchBox'

export default function Home() {
  const dispatch = useDispatch()
  const data = useSelector(data=>data.data)
  useEffect(()=>{
    const GetAllData = async () => {
      const res = await fetch('http://localhost:7777/data/')
      const json = await res.json()
      dispatch(DefDataAct(json))
    }
GetAllData()
  },[])
  return (
    <div className='home'>
    <Ad />
    <NewItems />
    {/* Search Box */}
    <SearchBox />
    <InfoHome />
    <Footer />
    </div>
  )
}
