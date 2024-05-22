import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import Home from './Pages/Home';
import Error from './Pages/Error';
import {Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Login from './Pages/Login';
import CreateItem from './Pages/CreateItem';
import { useDispatch } from 'react-redux';

function App() {
  // const { t,i18n } = useTranslation();
  
  // const changeLanguage = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  return (
    <>
    {/* <button onClick={() => changeLanguage('en')}>en</button>
    <button onClick={() => changeLanguage('sp')}>sp</button>
    <h1>{t("header.main")}</h1>
    <h1>{t("header.secondary")}</h1> */}
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/log' element={<Login />} />
      <Route path='/add' element={<CreateItem />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </>
  )
}

export default App
