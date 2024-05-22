import React from 'react'
import '../Styles/Home/home.css'
import {useDispatch, useSelector} from 'react-redux'
import '../Styles/Search/search.css'
import {SearchAct} from '../Redux/Action/SearchAct'

export default function Search() {
  // redux data
  const theme = useSelector(data=>data.theme)
  const lng = useSelector(data=>data.lang)
  const dispatch = useDispatch()
  const search = useSelector(data=>data.search)
  return (
    <div className='search'>
<input
placeholder={lng==='en'?'search':'buscar'}
 type='text'
 value={search}
 onChange={(e)=>dispatch(SearchAct(e.target.value))}
 className={theme?'search-input':"search-input-dark"}
/>
      {/* <button className={theme?'btn-find':'btn-find-dark'}>{lang==='en'?'Find':'Encontrar'}</button> */}
    </div>
  )
}
