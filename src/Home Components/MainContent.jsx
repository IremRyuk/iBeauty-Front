import React,{useState,useEffect} from 'react'
import {Stack,Badge,Typography} from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';

export default function MainContent() {
  const ItemFont = {
    fontSize:'20px',
    color:'white',
    fontWeight:'bold'
  }
  
  const [data,setData] = useState(null)
  const lang = useSelector(data=>data.lang)


  useEffect(()=>{
const allData = async () => {
  const res = await fetch('https://ibeaury-back.onrender.com/data')
  const data = await res.json()
  setData(data)
}
allData()
  },[])


  return (
    <div className='mainContent'>
      {data && data.map(res=>
        <div className='main-box'  key={res._id}>
        <img src={res.image} alt="5135" className="main-box-img" />
        <Stack direction='row' sx={{border:'none',borderTop:'1px solid gray',padding:'0px 5px',justifyContent:'space-between',alignItems:'center'}}>
        <Typography sx={ItemFont}>{lang==='en'?res.nameEN:res.nameGE}</Typography>
        <Typography sx={ItemFont}>Price: 25$</Typography>
        <AddShoppingCartIcon color="action" sx={{fontSize:'25px'}}/>
        </Stack>
        </div>)}
    </div>
  )
}
