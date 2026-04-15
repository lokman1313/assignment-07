'use client'
import React, { createContext, useState } from 'react';

export const InterectiveContext=createContext();

const InterectiveContextProvider = ({children}) => {
    const [call,setCall]=useState([])
    const [text,setText]=useState([])
    const [videoCall,setVideoCall]=useState([])
    const data={call,text,videoCall,setCall,setText,setVideoCall}
    return (
        <InterectiveContext.Provider value={data}>
            {children}
        </InterectiveContext.Provider>
    );
};
export default InterectiveContextProvider;