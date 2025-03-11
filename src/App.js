import { Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/mainLayout';
import Home from './pages/Home/Home';
import Visit from './pages/Visit/Visit';
import { ChurchDetails } from './pages/churchPage/ChurchDetails';
import Watch from './pages/Watch/Watch';
import Events from './pages/Events/Events';
import Give from './pages/Give/Give';
import About from './pages/About/About'
import Lema from './pages/About/Lema'
import Credo from './pages/About/Credo';
/* import LogIn from './pages/LogIn';
import SignUp from './pages/signUp'; */


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/iglesias" element={<MainLayout><Visit /></MainLayout>} />
        <Route path="/iglesias/:churchName" element={<MainLayout><ChurchDetails /></MainLayout>} />
        <Route path="/eventos" element={<MainLayout><Events /></MainLayout>} />
        <Route path="/medios" element={<MainLayout><Watch /></MainLayout>} />
        <Route path="/siembra" element={<MainLayout><Give /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/about/lema" element={<MainLayout><Lema /></MainLayout>} />
        <Route path="/about/credo" element={<MainLayout><Credo /></MainLayout>} />
        {/* <Route path="/logIn" element={<LogIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/> */}
      </Routes>
    </>
  );
}

export default App;
