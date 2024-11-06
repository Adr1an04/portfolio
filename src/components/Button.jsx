const Button = ({ name = "Discovery", isBeam = false, containerClass }) => {
    return (
        <button className={`glow-on-hover ${containerClass} sm:p-4 p-3 sm:text-lg text-base flex items-center justify-center`}>
            {isBeam && (
                <span className="relative flex h-2 w-2.5">
                </span>
            )}
            <span className="flex items-center justify-center">
                {name}
            </span>
        </button>
    );
};

export default Button;
