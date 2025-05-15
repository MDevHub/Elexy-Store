import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Page1 from './components/Page1'
import Contact from './components/Contact'
import Products from './components/products'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/contact" element={<Contact />} />
		  <Route path="/products" element={<Products />} />
      </Routes>
		<Footer/>
    </Router>
  )
}

export default App
