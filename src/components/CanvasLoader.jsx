import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
    const { progress } = useProgress()

    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                padding: '20px',
                width: '200px',
                height: '200px',
                color: '#2B77E7',
                textAlign: 'center',
                fontFamily: "'Barlow', sans-serif",
            }}
        >
            {/* Loader Spinner */}
            <div
                className="canvas-loader"
                style={{
                    border: '5px solid #fff',
                    borderTop: '5px solid #2B77e7', // Blue top border for the spinner
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    animation: 'spin 1.5s linear infinite',
                    marginBottom: '20px',
                }}
            />
            <p
                style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginTop: '10px',
                    color: '#F1F1F1',
                }}
            >
                {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>

            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </Html>
    )
}

export default CanvasLoader
