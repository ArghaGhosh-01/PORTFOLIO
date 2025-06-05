import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SplineBackground from './SplineBackground';
import { Moon, Sun } from 'lucide-react';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-300">
      <div className="fixed inset-0 z-0 opacity-70 pointer-events-none">
        <SplineBackground />
      </div>
      
      <Header />
      
      <button
        onClick={toggleDarkMode}
        className="fixed right-4 top-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:scale-110"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-blue-700" />
        )}
      </button>
      
      <main className="flex-grow z-10 relative">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;