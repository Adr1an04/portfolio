const Alert = ({ type, text }) => {
    return (
        <div
            className="fixed bottom-5 right-5 flex justify-center items-center z-50"
            style={{ animation: 'fadeIn 0.5s' }}
        >
            <div
                className={`flex items-center p-4 rounded-md shadow-lg max-w-xs w-full ${
                    type === 'danger' ? 'bg-red-600' : 'bg-green-600'
                } text-white`}
                role="alert"
            >
                <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full mr-4 ${
                        type === 'danger' ? 'bg-red-500' : 'bg-green-500'
                    }`}
                >
                    {/* Icon based on alert type */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-6 h-6"
                    >
                        {type === 'danger' ? (
                            <path
                                d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        ) : (
                            <path
                                d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        )}
                    </svg>
                </span>
                <div>
                    <p className="font-semibold text-lg">
                        {type === 'danger' ? 'Error' : 'Success'}
                    </p>
                    <p className="text-sm">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Alert;
