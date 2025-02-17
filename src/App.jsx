import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Certification, StarsCanvas, Mentor, FlyingButterflies } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          {/* Flying Butterflies Container */}
          <div className="absolute top-0 left-0 z-10">
            <FlyingButterflies />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Certification />
        <Mentor />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
