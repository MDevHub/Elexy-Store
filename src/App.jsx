import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Page1 from './components/Page1';
import Contact from './components/Contact';
import Products from './components/Products';
import HomeAppliances from './components/Categories/HomeAppliances';
import Laptops from './components/Categories/Laptops';
import KitchenAppliances from './components/Categories/KitchenAppliances';
import PhoneTablets from './components/Categories/PhoneTablets';
import Accessories from './components/Categories/Accessories';
import Login from './components/Login & SignUp/Login';
import SignUp from './components/Login & SignUp/SignUp';
import Cart from './components/Cart/CartPage';
import Profile from './components/Login & SignUp/Profile';
import ProtectedRoute from './components/Login & SignUp/ProtectedRoute';
import Footer from './components/Footer';

import { AuthProvider } from './components/Login & SignUp/AuthContext';
import { CartProvider } from './components/Cart/CartContext';
import CartPage from './components/Cart/CartPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider> {/* Wrap the application with CartProvider */}
          <Header />
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/homeappliances" element={<HomeAppliances />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/kitchenappliances" element={<KitchenAppliances />} />
            <Route path="/phonetablets" element={<PhoneTablets />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected Cart Route */}
            <Route
              path="/cartpage"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />

            {/* Protected Profile Route */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
