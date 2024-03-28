import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Resume} from './components';
import Footer from "./components/Footer";


const App = () =>{
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Resume/>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
