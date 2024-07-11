import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 200px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Clean up listener
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#333',
        color: 'white',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        zIndex: 1000
    };

    return (
        <div style={buttonStyle} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    );
};

export default ScrollToTopButton;

