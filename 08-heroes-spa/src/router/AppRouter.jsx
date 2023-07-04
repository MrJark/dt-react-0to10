import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from '../ui';

import { AboutPage } from '../auth/pages/AboutPage';
import { LoginPage } from '../auth/pages/LoginPage';

import { Marvel } from '../heroes/pages/Marvel';
import { DC } from '../heroes/pages/DC';

export const AppRouter = () => {

  return (
    <>
      <Navbar />

      <Routes>

          <Route path='about' element={<AboutPage/>}/>
          <Route path='login' element={<LoginPage/>}/>

          <Route path='marvel' element={<Marvel/>}/>
          <Route path='dc' element={<DC/>}/>

          <Route path='/*' element={<Navigate to='/marvel'/>}/>
      </Routes>
    </>
  )
}
