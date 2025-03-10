import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X} from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-White text-black p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/"><img src="src/assets/bb84c1c3-96ef-4d75-aca2-1260eb3a7a71.jpeg" width={50} alt="My Logo" /></Link>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
        {/* Menu Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-4 absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto  p-2 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'top-6' : '-top-9'
          }`}
        >
          <li className="py-2 md:py-0 hover:text-sky-700 text-2xl font-sans">
            <Link to="/createNote" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0 text-2xl hover:text-sky-700 font-sans">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              My Notes
            </Link>
          </li>
          <li className="py-2 md:py-0 text-2xl hover:text-sky-700 font-sans">
            <Link to="/signin" onClick={() => setIsOpen(false)}>
              Sign in
            </Link>
            </li>
          
            
        
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;