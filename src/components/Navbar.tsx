import { NavLink } from "react-router-dom";
import catImg from "../assets/images/cat.svg"

const navLinkClass = ( {isActive}: { isActive: boolean }) => `hover:text-white hover:underline decoration-blue-400 transition ${isActive && "text-white underline"}`

const NavBar = () => {
  

  return (
    <nav className="font-bold flex mb-4 justify-between items-end">
        <ul className="flex space-x-7 text-lg">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>
        <a href="https://www.google.com/search?tbm=isch&q=cat memes" target="_blank"><img src={catImg} alt="..." className="h-[5em] object-contain"/></a>
    </nav>
  );
};

export default NavBar;
