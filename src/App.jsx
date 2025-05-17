import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Page1 from './components/Page1'
import Contact from './components/Contact'
import Products from './components/Products'
import HomeAppliances from './components/Categories/HomeAppliances'
import Laptops from './components/Categories/Laptops'
import KitchenAppliances from './components/Categories/KitchenAppliances'
import PhoneTablets from './components/Categories/PhoneTablets'
import Accessories from './components/Categories/Accessories'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/contact" element={<Contact />} />
		    <Route path="/products" element={<Products />} />
        <Route path="/homeappliances" element={<HomeAppliances />} />
        <Route path="/laptops" element={<Laptops/>} />        
        <Route path="/kitchenappliances" element={<KitchenAppliances/>} />        
        <Route path="/phonetablets" element={<PhoneTablets/>} />        
        <Route path="/accessories" element={<Accessories/>} />        
      </Routes>
		<Footer/>
    </Router>
  )
}

export default App
