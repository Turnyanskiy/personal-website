import { NavLink } from "react-router-dom";

const navLinkClass = ( {isActive}: { isActive: boolean }) => `hover:text-white hover:underline decoration-blue-400 transition ${isActive && "text-white underline"}`

const NavBar = () => {
  return (
    <nav className="font-bold flex mb-4 justify-between">
        <ul className="flex space-x-7 text-lg">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>
        <ul className="flex text-lg space-x-7">
          <li>v1.0.0</li>
        </ul>
    </nav>
  );
};

export default NavBar;
