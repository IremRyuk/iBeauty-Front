import React from 'react'
import { useSelector } from 'react-redux'
import Travel from '../Images/infohome.webp'
import '../Styles/InfoHome/infohome.css'

export default function InfoHome() {
  const theme = useSelector(data=>data.theme)
  const lng = useSelector(data=>data.lang)
  const dataName = {
    en:"When you go on a trip, always remember to have great jewelry, a nice bag and the best perfume for your confidence",
    sp:"Cuando salgas de viaje recuerda siempre llevar unas buenas joyas, un bonito bolso y el mejor perfume para tu confianza."
  }
  return (
    <center>
      <div className={theme?'infohome':'infohome-dark'}>
    <div className='infohome-box'>
      <p className={theme?'infohome-name':'infohome-name-dark'}>{lng==='en'?dataName.en:dataName.sp}</p>
      <img src={Travel} alt='iBeauty' className='infohome-img' />
    </div>
    </div>
    </center>
  )
}
    