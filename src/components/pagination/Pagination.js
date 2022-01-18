import React, { useEffect } from 'react';

const Pagination = (props) => {
    // console.log(props, "================");
    const scrolling = () => {
        console.log("I am scrolling...!");
        if (Math.floor((props.element).scrollTop + (props.element).clientHeight) === (props.element).scrollHeight) {
            props.paginationHandler();
        }
    }
    useEffect(() => {
        if (props.element) {
            props.element.addEventListener("scroll", scrolling)
        }
        return () => {
            console.log("I am removing form dom");
            props.element.removeEventListener("scroll", scrolling);
        }
    }, [props.element]);
    return (
        <>
        </>
    )
}

export default Pagination;
