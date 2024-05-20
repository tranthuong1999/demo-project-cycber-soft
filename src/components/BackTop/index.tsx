import React, { useState, useEffect } from 'react'
import "./style.scss"

const BackTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const handleClickBackTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible ? (
            <div className='back-top' onClick={handleClickBackTop}>
                <i className='fas fa-arrow-up' />
            </div>
        ) : (<div></div>)
    );
}

export default BackTop