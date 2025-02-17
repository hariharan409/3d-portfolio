import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Certification, StarsCanvas, Mentor } from "./components";
import { MonkeyAnimation } from "./components/lottie-animation/LottieComponent";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-x-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
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
        {/* monkey animation */}
        <div className="fixed top-20 right-[-15px] z-10">
          <div className="w-[130px] md:w-[200px] xl:w-[300px]">
            <MonkeyAnimation />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
