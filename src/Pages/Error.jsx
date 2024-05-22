import React from 'react'
import {Stack,Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function Error() {
    const navigate = useNavigate()
  return (
    <Stack height='80vh' direction='column' justifyContent='center' gap='20px' alignItems='center'>
        <SentimentVeryDissatisfiedIcon sx={{color:'red',width:'15vw',height:'15vh'}} />
        <Typography variant='h4' color='error' sx={{textAlign:'center'}}>Page Not Found</Typography>
        <Button onClick={()=>navigate('/')} variant='contained' sx={{padding:'20px 30px',bgcolor:'red','&:hover':{bgcolor:'red'}}}>Go Back To Home Page</Button>
    </Stack>
  )
}
