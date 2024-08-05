
import Home from './pages/home';
import { useEffect } from 'react';
import AOS from 'aos';
import ScrollToTop from './components/scrolltoup';
import Contact from './pages/contact';
import {useDocTitle} from './components/customhooks';
import DemoProduct from './pages/demo';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
          </Routes>

        </ScrollToTop>
      </BrowserRouter>

    </>
  );
}

export default App;
