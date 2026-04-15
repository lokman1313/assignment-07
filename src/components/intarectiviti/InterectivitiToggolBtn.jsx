"use client"
import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';

const InterectivitiToggolBtn = () => {
    return (

        <div className='grid md:grid-cols-3 grid-cols-2 gap-3 '>
            <button className='flex flex-col justify-center items-center py-7 shadow-sm text-4xl font-bold'>
                <BiPhoneCall />
                <span className='text-sm font-semibold'>Call</span>
            </button>
            <button className='flex flex-col justify-center items-center py-7 shadow-sm text-4xl font-bold'>
                <MdOutlineTextsms />
                <span className='text-sm font-semibold'>Text</span>
            </button>
            <button className='flex flex-col justify-center items-center py-7 shadow-sm text-4xl font-bold'>
                <IoVideocamOutline />
                <span className='text-sm font-semibold'>Video</span>
            </button>
            
        </div>
    );
};

export default InterectivitiToggolBtn;