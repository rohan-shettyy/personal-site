import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-textMain selection:bg-accent selection:text-primary">
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;