
import InterectiveContextProvider from '@/context/Interectiv.context';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Providers = ({children}) => {
    return (
        <InterectiveContextProvider>
            <ToastContainer></ToastContainer>
            {children}
            </InterectiveContextProvider>
    );
};

export default Providers;