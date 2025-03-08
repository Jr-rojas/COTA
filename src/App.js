import {Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/mainLayout';
import Home from './pages/Home';
import Visit from './pages/Visit';
import { ChurchDetails } from './pages/churchPage/ChurchDetails';
import Watch from './pages/Watch';
import Events from './pages/Events';
import Give from './pages/Give';
/* import LogIn from './pages/LogIn';
import SignUp from './pages/signUp'; */


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
          <Route path="/iglesias" element={<MainLayout><Visit/></MainLayout>}/>
          <Route path="/iglesias/:churchName" element={<MainLayout><ChurchDetails/></MainLayout>}/>
          <Route path="/eventos" element={<MainLayout><Events/></MainLayout>}/>
          <Route path="/medios" element={<MainLayout><Watch/></MainLayout>}/>
          <Route path="/siembra" element={<MainLayout><Give/></MainLayout>}/>
          {/* <Route path="/logIn" element={<LogIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/> */}
        </Routes>
    </>
  );
}

export default App;
