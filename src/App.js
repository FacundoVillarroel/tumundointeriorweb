// StyleSheet
import './App.css';

// Fonts
import './fonts/Beauty-Dream.ttf';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomeContainer from './components/homeContainer/HomeContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomeContainer/>}/>
          <Route path="*" element={ <Navigate to="/"/>}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
