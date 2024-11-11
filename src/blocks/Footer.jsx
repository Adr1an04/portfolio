const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white pt-7 pb-5  border-t border-blue-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Links */}
                <div className="gap-4 text-sm text-white">
                    <p className="hover:text-white cursor-pointer">Thank you for visiting!! :D</p>
                </div>

                <div className="flex gap-6 mt-4 md:mt-0 ">
                    <a href="https://github.com/Adr1an04" target="_blank" rel="noopener noreferrer"
                       className="social-icon hover:text-blue-500">
                        <img src="/assets/github.svg" alt="GitHub"
                             className="w-7 h-7 transition duration-300 ease-in-out transform hover:scale-110"/>
                    </a>
                    <a href="https://www.linkedin.com/in/adrianosoriob/" target="_blank" rel="noopener noreferrer"
                       className="social-icon hover:text-blue-500">
                        <img src="/assets/linkedin.svg" alt="LinkedIn"
                             className="w-7 h-7 transition duration-300 ease-in-out transform hover:scale-110"/>
                    </a>
                    <a href="/assets/Adrian_Osorio_Resume.pdf" target="_blank" rel="noopener noreferrer"
                       className="social-icon hover:text-blue-500">
                        <img
                            src="/assets/resume.svg"
                            alt="Resume"
                            className="w-7 h-7 transition duration-300 ease-in-out transform hover:scale-110"
                        />
                    </a>
                </div>


                <p className="text-sm text-white mt-4 md:mt-0">
                    © 2024 Adrian Osorio B
                </p>
            </div>
        </footer>
    );
};

export default Footer;
