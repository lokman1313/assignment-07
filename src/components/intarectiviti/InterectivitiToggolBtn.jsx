"use client"
import { InterectiveContext } from '@/context/Interectiv.context';
import React, { useContext } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';

const InterectivitiToggolBtn = ({friend}) => {

    const {call,text,videoCall,setCall,setText,setVideoCall} =useContext(InterectiveContext)
    console.log(call)

    const handelCallBtn =()=>{
        setCall([...call,friend])
        toast.success('Call send Successfully')
    }
    const handelTextBtn =()=>{
        setText([...text,friend])
        toast.success('Text send Successfully')
    }
    const handelVideoCallBtn =()=>{
        setVideoCall([...videoCall,friend])
        toast.success('Video-call send Successfully')
    }
    return (

        <div className='grid md:grid-cols-3 grid-cols-2 gap-3 '>
            <button onClick={handelCallBtn} className='flex flex-col justify-center items-center py-7 shadow-sm text-4xl font-bold'>
                <BiPhoneCall />
                <span className='text-sm font-semibold'>Call</span>
            </button>
            <button onClick={handelTextBtn} className='flex flex-col justify-center items-center py-7 shadow-sm text-4xl font-bold'>
                <MdOutlineTextsms />
                <span className='text-sm font-semibold'>Text</span>
            </button>
            <button onClick={handelVideoCallBtn} className='flex flex-col justify-center items-center py-7 shadow-sm text-4xl font-bold'>
                <IoVideocamOutline />
                <span className='text-sm font-semibold'>Video</span>
            </button>
            
        </div>
    );
};

export default InterectivitiToggolBtn;