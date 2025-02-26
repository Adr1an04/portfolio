import { useState } from 'react';
import {navLinks} from "../constants/index.js"

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a">
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/5">
            <div className="mx-auto">
                <div className="flex justify-between items-center py-1 c-space">
                    <a className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        <img
                            src="/assets/AGO.svg"
                            className={"ago"}
                            width="50"
                            height="50"
                            alt=""/>

                    </a>

                    <button onClick={toggleMenu}
                            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                            aria-label="Toggle menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                             alt="toggle" className="w-7 h-7"/>
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5 text-white">
                    <NavItems/>
                </nav>
            </div>
        </header>
);
};

export default Navbar;
