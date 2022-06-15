
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import my_photo from "../assests/my_photo"


function App() {
  return (
  
    <div class="wrapper">
      
      <Hero />

     <Skills />

      <Projects />


      <About />
      <Contact />

      <Footer />
    </div>
  
  );
}

export default App;
