import logo from '../assets/logo_new.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-20" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/yohannes-rahul-rafael-64019721b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="bg-white text-linkedin p-1 rounded-md w-10 h-10 border" />
        </a>
        <a href="https://github.com/Yohannes3003" target="_blank" rel="noopener noreferrer">
          <FaGithub className="bg-white text-github p-1 rounded-md w-10 h-10 border" />
        </a>
        <a href="https://www.instagram.com/yohannesrr?igsh=NGdpNzJ3c3pyYm10&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="bg-white text-instagram p-1 rounded-md w-10 h-10 border" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
