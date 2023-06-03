import Navbar from './Navbar';
import Home from './pages/Home';
import Visit from './pages/Visit';
import Watch from './pages/Watch';
import Events from './pages/Events';
import Give from './pages/Give';
import {Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/visit" element={<Visit/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/watch" element={<Watch/>}/>
          <Route path="/give" element={<Give/>}/>
        </Routes>
    </>
  );
}

export default App;
