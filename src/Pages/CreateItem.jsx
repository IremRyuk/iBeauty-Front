import React from 'react'
import { useState } from 'react'
import {Stack,TextField,Typography,Button,FormControl,InputLabel,Select,MenuItem} from '@mui/material'
import axios from 'axios'
import '../Styles/CreateItem/createItem.css'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import {useSelector} from 'react-redux'

export default function CreateItem() {
    // Theme
    const theme = useSelector(data=>data.theme)
    var lng = useSelector(data=>data.lang)
    const [imagebase64,setImage] = useState(null)
    const [nameSp,setNameSp] = useState('')
    const [nameEN,setNameEN] = useState('')
    const [titleSp,setTitleSp] = useState('')
    const [titleEN,setTitleEN] = useState('')
    const [descrSp,setDescrSp] = useState('')
    const [descrEN,setDescrEN] = useState('')
    const [category,setCat] = useState('')
    const [price,setPrice] = useState('')
    // Mui
    const MuiStack = {
      width:'60%',
      alignItems:'flex-start',
      justifyContent:'left',
      padding:'5px 10px',
      gap:'10px',
      borderRadius:'2.4mm',
      boxShadow:'0px 0px 10px #eaa4ff'
    }
    const MuiStackDark = {
      width:'60%',
      alignItems:'flex-start',
      justifyContent:'left',
      padding:'5px 10px',
      gap:'10px',
      borderRadius:'2.4mm',
      boxShadow:'0px 0px 10px gray'
    }
    const MuiStackImg ={
      width:'fit-content',
      alignItems:'flex-start',
      justifyContent:'left',
      padding:'10px 20px',
      gap:'10px',
      borderRadius:'2.4mm',
      boxShadow:'0px 0px 10px #eaa4ff'
    }
    const MuiStackImgDark = {
      width:'fit-content',
      alignItems:'flex-start',
      justifyContent:'left',
      padding:'10px 20px',
      gap:'10px',
      borderRadius:'2.4mm',
      boxShadow:'0px 0px 10px gray'
    }
    const MuiStackBtn = {
      width:'60%',
      alignItems:'center',
      justifyContent:'center',
      padding:'5px 10px',
    }
    const AddBtn ={
      width:'87%',
      fontSize:'25px',
      bgcolor:'#eaa4ff',
      '&:hover':{
        bgcolor:'#eaa4ff',
      }
    }
    const AddBtnDark ={
      width:'87%',
      fontSize:'25px',
      bgcolor:'gray',
      '&:hover':{
        bgcolor:'gray',
      }
    }
    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    })
    // Add Item
    const setImages = (e)=> {
      console.log(e.target.files)
      setImage(e.target.files[0])
    }
    console.log(imagebase64)

    const createItem = async () => {
    // Check If There Is Image
    if(!imagebase64){
      alert('No Base64')
    }else{
      //  Base64
     const base64 = await convertToBase64(imagebase64)
     // All Data
     const allInfo = {
      image:base64,
      nameSp:nameSp,nameEN:nameEN,
      titleSp:titleSp,titleEN:titleEN,
      descrSp:descrSp,descrEN:descrEN,
      category:category,
      price:price,
  }
  try{
    const newData = await axios.post('http://localhost:7777/data/',allInfo,{
      headers:{
        'Content-Type':'application/json'
      }
    })
    alert('success')
    console.log(newData)
  }catch(err){
    alert('error')
    console.log(err)
  }
    }
  }
  return (
    <center>
      <Typography variant='h4' sx={{marginTop:'20px'}}>{lng==='en'?'Create New Item':'Crear nuevo artículo'}</Typography>
    <form className='addItem'>
      
      {/* Picture Upload */}
      <Stack direction='row' sx={theme?MuiStack:MuiStackDark}>
        {/* Upload image */}
      <Stack direction='column' sx={theme?MuiStackImg:MuiStackImgDark}>
      <Typography variant='h5'>{lng==='en'?'Upload Picture':'Subir foto'}</Typography>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      {lng==='en'?"Upload file":"Subir archivo"}
      <VisuallyHiddenInput type="file" onChange={(e)=>setImages(e)}/>
      </Button>
      </Stack>
      {/* Current Image */}
      {imagebase64 &&
      <img src={URL.createObjectURL(imagebase64)} className='createImage'/>
      }
      </Stack>

      {/* Name */}
      <Stack direction='column' sx={theme?MuiStack:MuiStackDark}>
      <Typography variant='h5'>{lng==='en'?"Name":"Nombre"}</Typography>
      <TextField
      sx={{width:'100%'}}
      placeholder='Name Sp...'
      value={nameSp}
      onChange={(e)=>(setNameSp(e.target.value))}
      variant='outlined'
      />
      <TextField
      sx={{width:'100%'}}
      placeholder='Name Eng...'
      value={nameEN}
      onChange={(e)=>(setNameEN(e.target.value))}
      variant='outlined'
      />
      </Stack>

      {/* Title */}
      <Stack direction='column' sx={theme?MuiStack:MuiStackDark}>
      <Typography variant='h5'>{lng==='en'?"Title":"Título"}</Typography>
      <TextField
      sx={{width:'100%'}}
      placeholder='Title Sp...'
      value={titleSp}
      onChange={(e)=>(setTitleSp(e.target.value))}
      variant='outlined'
      />
      <TextField
      sx={{width:'100%'}}
      placeholder='Title Eng...'
      value={titleEN}
      onChange={(e)=>(setTitleEN(e.target.value))}
      variant='outlined'
      />
      </Stack>

      {/* Description */}
      <Stack direction='column' sx={theme?MuiStack:MuiStackDark}>
      <Typography variant='h5'>{lng==='en'?"Description":"Descripción"}</Typography>
      <TextField
      sx={{width:'100%'}}
      placeholder='Description Sp...'
      value={descrSp}
      onChange={(e)=>(setDescrSp(e.target.value))}
      variant='outlined'
      />
      <TextField
      sx={{width:'100%'}}
      placeholder='Description Eng...'
      value={descrEN}
      onChange={(e)=>(setDescrEN(e.target.value))}
      variant='outlined'
      />
      </Stack>
      {/* Category */}
      <Stack direction='column' sx={theme?MuiStack:MuiStackDark}>
      <Typography variant='h5'>{lng==='en'?"Category":"Categoría"}</Typography>
      <FormControl fullWidth>
      <InputLabel>{lng==='en'?'Select...':'Seleccionar'}</InputLabel>
      <Select
        value={category}
        label={lng==='en'?'Select...':'Seleccionar'}
        onChange={(e)=>setCat(e.target.value)}
      >
        <MenuItem value={'perfume'}>Perfume</MenuItem>
        <MenuItem value={'jewelry'}>Jewelry</MenuItem>
        <MenuItem value={'gift'}>Gift</MenuItem>
      </Select>
      </FormControl>
      </Stack>
      {/* Price */}
      <Stack direction='column' sx={theme?MuiStack:MuiStackDark}>
      <Typography variant='h5'>{lng==='en'?"Price":"Precio"}</Typography>
      <TextField
      type='number'
      sx={{width:'100%'}}
      placeholder={lng==='en'?'Type Number...':'Teclea un número'}
      value={price}
      onChange={(e)=>(setPrice(e.target.value))}
      variant='outlined'
      />
      </Stack>
      <Stack direction='row' sx={MuiStackBtn}>
      <Button variant='contained' color='primary' sx={theme?AddBtn:AddBtnDark} onClick={()=>createItem()}>{lng==='en'?"Create New Item":"Crear nuevo artículo"}</Button>
      </Stack>
    </form>
    </center>
  )
}

function convertToBase64(file){
    return new Promise((resolve,reject)=>{
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }