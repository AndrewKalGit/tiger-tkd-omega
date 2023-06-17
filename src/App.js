import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AboutPage from './About/AboutPage';
import ContactPage from './Contact/ContactPage';
import ContactUsBanner from './Landing/ContactUsBanner';
import CTABanner from './Landing/CTABanner';
import OurInstructors from './Landing/OurInstructors';
import Testimonial from './Landing/Testimonial';
import Schedule from './Schedule/Schedule';
import Footer from './Footer';
import Nav from './Nav';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route 
            element={<>
            <CTABanner></CTABanner>
            <ContactUsBanner></ContactUsBanner>
            <OurInstructors></OurInstructors>
            <Testimonial></Testimonial>
            </>} 
            path='/'>
          </Route>
          <Route 
            element={<>
            <AboutPage></AboutPage>
            </>}
            path='about/'>
          </Route>
          <Route 
            element={<>
            <Schedule></Schedule>
            </>} 
            path='schedule/'>
          </Route>
          <Route 
            element={<>
            <ContactPage></ContactPage>
            </>} 
            path='contact/'>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
