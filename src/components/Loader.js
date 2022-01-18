import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import './loader.css';
import { loaderSubject } from '../lib/rxJs';
const Loader = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        loaderSubject.subscribe((paramiter) => {
            setIsLoading(paramiter)
        });
    }, [])
    return (
        <>
            {
                isLoading && (
                    <div className='loading-Component'>
                        <Box sx={{ display: 'flex' }} className='justify-content-center align-items-center w-100 h-100'>
                            <CircularProgress />
                        </Box>
                    </div>
                )
            }
        </>
    )
}

export default Loader
