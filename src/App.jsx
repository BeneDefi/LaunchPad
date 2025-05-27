import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import SalesTracker from './components/SalesTracker';
import Trends from './components/Trends';
import DxSections from './components/DxSections';
import Footer from './components/Footer/Footer';


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <SalesTracker />
        <Trends />
        {/* <DxSections /> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        {/* <Works />
        <Feedbacks /> */}
        <div className="relative z-0">
        <DxSections />
          {/* <Contact /> */}
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
