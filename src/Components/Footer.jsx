import React from 'react'
import { useSelector } from 'react-redux'
import '../Styles/Footer/footer.css'
import {Typography} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Footer() {
  const theme = useSelector(data=>data.theme)
  const lng = useSelector(data=>data.lang)
  const dataLng = {
    en:"Contact Us",
    sp:"Contacta con nosotros"
  }
  return (
    <div className={theme?'footer':'footer-dark'}>
      <center>
        <Typography variant='h4' className={theme?'footer-txt':'footer-txt-dark'}>
          {lng=='en'?dataLng.en:dataLng.sp}
        </Typography>
      </center>
      <center>
      <div className='footer-box'>
      <div
       className='soc-box'
      onClick={()=>window.location.href = 'mailto:ibeauty@gmail.com'}>
        <GoogleIcon 
        sx={{fontWeight:'bold',color:'rgb(255, 67, 199)',marginRight:'5px'}}/>
        <Typography 
        sx={{fontWeight:'bold',color:'rgb(255, 67, 199)',fontSize:{xs:'19px',sm:'25px'}}}>
          ibeauty@gmail.com</Typography>
      </div>
      <div
       className='soc-box'
      onClick={()=>window.location.href = 'tel:+245 788 741'}>
        <LocalPhoneIcon 
        sx={{fontWeight:'bold',color:'rgb(255, 67, 199)',marginRight:'5px'}}/>
        <Typography 
        sx={{fontWeight:'bold',color:'rgb(255, 67, 199)',fontSize:{xs:'19px',sm:'25px'}}}>
          +245 788 741</Typography>
      </div>
      </div>
      </center>
    </div>
  )
}
