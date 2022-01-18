import React, { useRef, useState, useEffect } from 'react'
import './scroll.css';

const ScrollToTop = (props) => {
    const element = document.getElementById("header");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        props.height > 500 ? setVisible(true) : setVisible(false);
    });

    const scrollToTop = () => {
        console.log("I am cliked");
        element.scrollIntoView(true);
    }
    return (
        <div className='d-flex justify-content-end align-items-end'>
            {/* <button onClick={scrollToTop} className={`${visible ? 'd-block': 'd-none'}`}>click me</button> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" onClick={scrollToTop} fill="currentColor" className={`bi bi-arrow-up-circle ${visible ? 'd-block' : 'd-none'} button`} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
        </div>
    )
}
export default ScrollToTop;