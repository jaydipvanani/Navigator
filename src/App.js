

import './App.css';
import Navbar from './componant/header/Navbar';
import About from './componant/pages/About';
import Blog from './componant/pages/Blog';
import Contact from './componant/pages/Contact';
import Home from './componant/pages/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  let role = "user"
  if (role == "admin") {
    return (
      <>
        <Navbar />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/blog' exact element={<Blog />} />
        </Routes>

      </>
    )
  }
  else if (role == "user") {
    return (
      <>

        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/blog' exact element={<Blog />} />
        </Routes>
      </>

    )


  }
}

export default App;
