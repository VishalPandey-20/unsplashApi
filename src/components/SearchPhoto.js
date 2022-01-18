import React, { useEffect, useState, useCallback } from 'react'
import { serachApiCall, apiCall, numberFun, input } from '../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import { searchApi } from '../api';
import { useNavigate } from 'react-router-dom';
import './searchPhoto.css';
import debounce from 'lodash.debounce';
// import fanzlyLogo from './img/logo.svg';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { fanZalyLogo } from '../lib/config';
const SearchPhoto = () => {
    const searchDataList = useSelector((state) => state.reducerFunData.searchDataList);
    const empList = useSelector((state) => state.reducerFunData.empList);
    const number = useSelector((state) => state.reducerFunData.number);
    const inputSearch = useSelector((state) => state.reducerFunData.inputSearch);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clickHandler = () => navigate('/');
    useEffect(() => {
        dispatch(apiCall());
    }, [number])
    const scrollHandler = (e) => {
        const totalHeight = e.target.scrollHeight;
        const clientHeight = e.target.clientHeight;
        // console.log("clientHeight=>>>", clientHeight);
        const scrollHeight = e.target.scrollTop;
        // console.log("scrollHeight=>>>", scrollHeight);
        if (Math.floor(scrollHeight + clientHeight) === totalHeight) {
            dispatch(numberFun())
        }
    }
    const changeHandler = (e) => {
        e.preventDefault();
        dispatch(input(e.target.value));
        dispatch(serachApiCall());
    }
    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 300)
        , []);
    return (
        <div className='loading'>
            < div className='main' onScroll={scrollHandler}>
                <div className='d-flex justify-content-between headerformargin sticky-top'>
                    <div>
                        <img src={fanZalyLogo} alt='asfdfsad' />
                    </div>
                    <div>
                        <form className="form-inline">
                            <div className="input-group searchIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search search-img" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                                <input type="text" className="form-control input" placeholder="Search" aria-label="Username" onChange={debouncedChangeHandler} aria-describedby="basic-addon1" />
                            </div>
                        </form>
                    </div>
                    <div className='searchHearder'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={clickHandler} className='icons' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <svg className='icons' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        <svg className='icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg className='icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </div>
                </div>
                <div className='dfgh'>
                    {
                        empList.length === 0 ? (<h3 className='text-center d-flex justify-content-center align-items-center w-100 h-100'>Data not found</h3>) :
                            (searchDataList.length > 0 ? (
                                searchDataList.map((itms, ind) => {
                                    return (
                                        <div className="card card-img col-4 position-relative" key={ind}>
                                            <img className="card-img-top img" src={itms.user.profile_image.large} alt="Card image cap" />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check position-absolute profile-img-icon" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                            </svg>
                                        </div>
                                    )
                                })
                            ) : (
                                empList.length && empList.map((itms, ind) => {
                                    return (
                                        <div className="card card-img col-4" key={ind}>
                                            <img className="card-img-top img" src={itms.user.profile_image.large} alt="Card image cap" />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check position-absolute profile-img-icon" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                            </svg>
                                        </div>
                                    )
                                })
                            ))
                    }
                </div>
            </div>
        </div >
    )
}

export default SearchPhoto;
