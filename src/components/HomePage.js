import React, { useEffect, useRef, useState } from 'react';
import './fanzlycard.css';
import { apiCall, numberFun, input } from '../redux/actions/action';
import { useSelector, useDispatch } from 'react-redux';
import { searchApi } from '../api';
// import { useNavigate } from 'react-router-dom';
// import fanzlyLogo from './/img/logo.svg';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ScrollToTop from './ScrollToTop';
import Loader from './Loader';
import { startLoader, stopLoader } from '../lib/global';
import Header from '../containers/header/Header';
import FanzalyCard from './FanzalyCard';
import Pagination from './pagination/Pagination';
const HomePage = () => {
    const divRef = useRef(null);
    const [isTrue, setIsTrue] = useState(false);
    const [elementHeight, setElementHeight] = useState(0);
    const heightFun = () => {
        setElementHeight(0)
    }
    const [dataOfApi, setDataOfApi] = useState([]);
    useEffect(() => {
        if (divRef.current) {
            setIsTrue(true);
        }
    }, [dataOfApi]);
    const selector = useSelector((state) => state.reducerFunData.empList);
    setTimeout(() => {
        setDataOfApi(selector);
    }, 2000)
    const number = useSelector((state) => state.reducerFunData.number);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(apiCall())
    }, [number])
    const inputValue = useSelector((state) => state.reducerFunData.inputSearch);
    const inputHandler = (e) => {
        dispatch(input(e.target.value));
    }
    return (
        <div className='loading'>
            {dataOfApi.length === 0 ? (
                <Box sx={{ display: 'flex' }} className=' justify-content-center align-items-center w-100 h-100'>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    < div className='main' ref={divRef}>
                        <Header />
                        <div id="header" className='d-flex mt-3 scroll'>
                            <div className='col-9 all-containt marginforallcontaint'>
                                <FanzalyCard data={selector} />
                            </div>
                            <div className='all-containt all-containt-featufe'>
                                <div className='position-sticky'>
                                    <div className='feature-img'>
                                        <div className='footer-and-img'>
                                            <img className='footer-img' src='https://res.cloudinary.com/fanzly/image/upload/c_thumb,b_white/q_auto/fanzly/users/profiles/kiklcwhi7gl0gvvjdzjw.webp' alt='sdfghjk' />
                                            <p className='name'>Jazz001</p>
                                        </div>
                                    </div>
                                    <div className='feature-img'>
                                        <div className='footer-and-img'>
                                            <img className='footer-img' src='https://res.cloudinary.com/fanzly/image/upload/c_thumb,b_white/q_auto/fanzly/users/profiles/kiklcwhi7gl0gvvjdzjw.webp' alt='sdfghjk' />
                                            <p className='name'>Jazz001</p>
                                        </div>
                                    </div>
                                    <div className='feature-img'>
                                        <div className='footer-and-img'>
                                            <img className='footer-img' src='https://res.cloudinary.com/fanzly/image/upload/c_thumb,b_white/q_auto/fanzly/users/profiles/kiklcwhi7gl0gvvjdzjw.webp' alt='sdfghjk' />
                                            <p className='name'>Jazz001</p>
                                        </div>
                                    </div>
                                    <ScrollToTop id="header" height={elementHeight} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        isTrue &&
                        <Pagination element={divRef.current} paginationHandler={() => dispatch(numberFun())} />
                    }
                </>
            )
            }
            {/* <ScrollToTop /> */}
        </div >
    )
}

export default HomePage;
