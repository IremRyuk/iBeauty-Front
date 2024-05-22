import React,{useState,useEffect} from 'react'
import '../Styles/Nav/nav.css'
import {Stack,Button,Badge,IconButton} from '@mui/material'
// import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
// Dark Mode
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import {useDispatch,useSelector} from 'react-redux'
import {DarkThemeAct} from '../Redux/Action/DarkThemeAct'
import {LangChangeActEn,LangChangeActSp} from '../Redux/Action/LangChangeAct'
import LanguageIcon from '@mui/icons-material/Language';
import EN from '../Images/usa.webp'
import SP from '../Images/sp.webp'
import {useNavigate} from 'react-router-dom'

export default function Nav() {
  // false for white , Redux
  const [theme,setTheme] = useState(true)
  var lng = useSelector(data=>data.lang)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(DarkThemeAct(theme))
  },[theme])

  // Mui
  const StackMui = {
    justifyContent:'center',
    alignItems:'center',
    gap: '30px',
    fontSize: '24px'
  }
  // Navigation
  const navigate = useNavigate()
  return (
    <center>
    <nav className={theme?'nav':'nav-dark'}>
        <div className={theme?'nav-menu':"nav-menu-dark"}>
        <p className='nav-header' onClick={()=>navigate('/')}>iBeauty</p>
        <Stack sx={StackMui} direction='row'>
        <Badge badgeContent={4} className={theme?"fv":"fv-dark"} sx={{cursor:'pointer'}}>
          <FavoriteIcon className={theme?"fv":"fv-dark"} />
        </Badge>

        <div className={theme?'line':'line-dark'}></div>
        {/* Auth */}
        {theme
        ?<Button
        startIcon={<PersonIcon className={theme?"fv":"fv-dark"} />} 
        variant="outlined" 
        sx={{
          border:'2px solid white',
          color:'white',
          '&:hover':{border:'2px solid white'}
          }}>{lng==='en'?"Log In":"Acceso"}</Button>
        :<Button
        startIcon={<PersonIcon className={theme?"fv":"fv-dark"} />} 
        variant="outlined" 
        sx={{
          border:'2px solid black',
          color:'rgb(255, 67, 199)',
          '&:hover':{border:'2px solid black'}
          }}>{lng==='en'?"Log In":"Acceso"}</Button>}

        <div className={theme?'line':'line-dark'}></div>
        <Stack direction='row' spacing={2}>
       {/* Theme Modes */}
       <IconButton onClick={()=>setTheme(e=>!e)}>
       {theme
       ?<WbSunnyIcon color='warning' title='light mode'/>
       :<Brightness3Icon color='primary'title='night mode'/>
       }
       </IconButton>
       {/* Language */}
       <IconButton className='langSelector'>
       <LanguageIcon sx={{color:'#ffffff'}}/>
       <div className='languages'>
        <img src={EN} alt='iBeauty' onClick={()=>{dispatch(LangChangeActEn('en'),console.log(lng)),localStorage.setItem('lang','en')}}/>
        <img src={SP} alt='iBeauty' onClick={()=>{dispatch(LangChangeActSp('sp'),console.log(lng)),localStorage.setItem('lang','sp')}}/>
       </div>
       </IconButton>
       </Stack>
               </Stack>
        </div>
    </nav>
    </center>
  )
}
