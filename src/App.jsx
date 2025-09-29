// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantHome from './pages/restaurant/RestaurantHome';
import AdminHome from './pages/admin/AdminHome';
import Acceuil from './pages/Accueil';
import MainLayout from './layout/MainLayout';
import Restaurants from './pages/Restaurant';
import Plats from './pages/Plats';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';


import { CartProvider } from './context/CartContext';
import PlatDetail from "./pages/PlatDetail";
import ScrollToTop from './components/ScrollToTop';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/Register';
import Menu from './pages/Menu';
import { Toaster } from "sonner";


import { AuthProvider } from './context/AuthContext';
import { OrderHistoryProvider } from './context/OrderHistoryContext'; 



import DashboardLayout from "./pages/clientt/DashboardLayout";
import Profile from "./pages/clientt/Profile";
import DeliveryAddress from "./pages/clientt/DeliveryAddress";
import Cart from "./pages/clientt/Cart";
import Checkout from "./pages/clientt/Checkout";
import OrderTracking from "./pages/clientt/OrderTracking";
import OrderHistory from "./pages/clientt/OrderHistory";
import Reviews from "./pages/clientt/Reviews";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <OrderHistoryProvider>
    <Router>
       <ScrollToTop />  
      <Routes>
        <Route path="/" element={<MainLayout><Acceuil /></MainLayout >} />
        <Route path="/nos-restaurants" element={<MainLayout><Restaurants /></MainLayout >} />
        <Route path="/restaurant" element={<RestaurantHome />} />
        <Route path="/restaurants/:restaurantId/menu" element={<Menu />} />
        <Route path="/plats" element={<MainLayout><Plats /></MainLayout>} />
        <Route path="/plats/:id" element={<PlatDetail />} />
        <Route path="/a-propos" element={<MainLayout><About /></MainLayout>} />
        <Route path="/faq" element={<MainLayout><Faq /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/admin" element={<AdminHome />} />
        {/*Route d'authentification*/}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        {/*Dashboard client route*/}
        <Route path="/client" element={<DashboardLayout />}>
          <Route index element={<Profile />} /> {/* Page par défaut du dashboard */}
          <Route path="profile" element={<Profile />} />
          <Route path="delivery-address" element={<DeliveryAddress />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-tracking" element={<OrderTracking />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Router>
    </OrderHistoryProvider>
    <Toaster richColors position="top-right" /> 
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
