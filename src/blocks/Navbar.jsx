import { useState } from 'react';
import { navLinks } from "../constants/index.js";

const NavItems = ({ mobile = false }) => {
    return (
        <ul className={`nav-ul ${mobile ? 'flex flex-col space-y-4' : 'hidden sm:flex space-x-6'}`}>
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="group relative">
                    <a href={href} className="text-white hover:text-blue-500 transition-colors duration-300 text-sm font-medium">
                        <span className="relative">
                            {name}
                            <span className="absolute left-0 -bottom-1 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <header className="fixed w-full top-0 z-40 backdrop-blur-sm bg-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    <a href="/" className="flex items-center space-x-2 group">
                        <img
                            src="/assets/AGO.svg"
                            className="ago h-8 w-8 group-hover:rotate-[30deg] transition-transform duration-300 fill-current"
                            alt=""
                        />
                    </a>

                    <nav className="hidden sm:block">
                        <NavItems />
                    </nav>

                    <button
                        onClick={toggleMenu}
                        className="sm:hidden p-2 rounded-lg hover:bg-blue-200 focus:outline-none"
                    >
                        <img 
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
                            alt="menu" 
                            className="w-6 h-6 text-white"
                        />
                    </button>
                </div>
            </div>

            <div className={`sm:hidden absolute w-full bg-blue/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="px-4 pt-4 pb-4">
                    <NavItems mobile={true} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;