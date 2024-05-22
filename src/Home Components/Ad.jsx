import React from 'react'
import {Box} from '@mui/material'
import '../Styles/Home/home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import One from '../../public/1.webp'
import Two from '../../public/2.webp'
import Three from '../../public/4.webp'
import Search from '../Home Components/Search'
import '../Styles/Ad/ad.css'
import {useNavigate} from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';


// import required modules
import {Autoplay, } from 'swiper/modules';
import { useSelector } from 'react-redux';

export default function Ad() {
  const navigate = useNavigate()
  const lng = useSelector(data=>data.lang)
    const BoxMui = {
      position:'realative',
      width:'100vw',
      height:'90vh',
    }
    const Data = [
      {id:1,cat:"perfume",nameSp:"Perfume",nameEn:'Perfume',descrSp:"la mejor manera de describirte a ti mismo",descrEn:"best way to describe yourself",bg:One},
      {id:2,cat:"jewelry",nameSp:"Joyas",nameEn:'Jewelry',descrSp:"Representan muchas emociones, desde la felicidad y el amor hasta la tristeza.",descrEn:"represent many emotions, from happiness and love to sadness",bg:Two},
      {id:3,cat:"gift",nameSp:"Paquetes de regalo",nameEn:'Gift Packs',descrSp:"una manera significativa de expresar amor, aprecio y celebrar momentos especiales",descrEn:"a meaningful way to express love, appreciation, and celebrate special moments",bg:Three}]
    return (
      <Box sx={BoxMui}>
       {/* create carousel from Swiper.js */}
       <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="slider"
      >
               {/* import images from Data storage */}
               {Data.map(res=>{
                   return(
                       <SwiperSlide key={res.id}  className="box-slider" style={{backgroundImage:res.bg}}>
                       <div className='cat-box'>
                        <img src={res.bg} className='adImg' alt='iBeauty'/>
                        <p className='cat-descr'>{lng==='en'?res.descrEn:res.descrSp}</p>
                        <button className='cat-btn' onClick={()=>navigate(`/filter/${res.cat}`)}>{lng==='en'?res.nameEn:res.nameSp}</button>
                       </div>
                   </SwiperSlide>
                   )
               })}
       </Swiper>
       {/* Search */}
       <Search />
        </Box>
    )
}
