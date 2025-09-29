import PropTypes from 'prop-types';
import NavBar from '../components/commons/NavBar';
import Footer from '../components/commons/Footer';
import { Toaster } from "@/components/ui/sonner"
export default function MainLayout({ children }) {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
      <NavBar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
