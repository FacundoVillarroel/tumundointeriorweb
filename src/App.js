// StyleSheet
import './App.css';

// Fonts
import './fonts/Beauty-Dream.ttf';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomeContainer from './components/homeContainer/HomeContainer';
import FrecuentQuestionsContainer from './components/FrequentQuestionsContainer/FrequentQuestionsContainer';
import Blog from "./components/Blog/Blog";
import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import ContactContainer from './components/contactContainer/ContactContainer';
import BookingContainer from './components/bookingContainer/BookingContainer'; 
import ConventionsContainer from "./components/ConventionsContainer/ConventionsContainer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState("");
  const [isConventionOpen, setIsConventionOpen] = useState(false);

  const toggleSidebar = (content) => {
    setIsOpen(!isOpen);
    setSidebarContent(content)
  };

  const toggleConventions = () => {
    setIsConventionOpen(!isConventionOpen)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar toggleSidebar={toggleSidebar} blur={isOpen}/>
        
        { isConventionOpen ? <ConventionsContainer toggleConventions={toggleConventions}/> : null}
        
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}>
          {sidebarContent === "contacto" ? <ContactContainer/> : <BookingContainer/> }
        </Sidebar>
        <main className={isOpen ? 'main-content' : ''}>
          <Routes>
            <Route path='/' element={<HomeContainer/>}/>
            <Route path='/preguntas-frecuentes' element={<FrecuentQuestionsContainer/>} />
            <Route path='/blog' element={<Blog/>}/>
            <Route path="*" element={ <Navigate to="/"/>}/> 
          </Routes>
        </main>
        <Footer toggleSidebar={toggleSidebar} toggleConventions={toggleConventions}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
