import React, { useContext } from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { ThemeContext } from './components/context';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? '#222' : '#fff', color: darkMode && '#fff' }}>
      <Toggle />
      <Intro />
      <About />
      <Contact />
    </div>
  );
}

export default App;
