import Navbar from './Navbar';
import Home from './pages/Home';
import Visit from './pages/Visit';
import { ChurchDetails } from './components/ChurchDetails';
import Watch from './pages/Watch';
import Events from './pages/Events';
import Give from './pages/Give';
import Footer from './components/Footer';
import {Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/visit" element={<Visit/>}/>
            <Route path="/visit/:id" element={<ChurchDetails/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/watch" element={<Watch/>}/>
            <Route path="/give" element={<Give/>}/>
          </Routes>
          <Footer/>
        {/* <div className='alerts'>
          This website is under construction. Links and buttons might not work.
      </div> */}
    </>
  );
}

export default App;
