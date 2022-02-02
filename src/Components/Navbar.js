import React from 'react'
import {ImHome} from 'react-icons/im'
import {BsInfoLg} from 'react-icons/bs'
import {BiCategoryAlt} from 'react-icons/bi'
import {MdContactMail} from 'react-icons/md'

const Navbar = () => {
    return (
        <div className='navbar-wrapper w-ful flex justify-center items-center py-5'  id="home">
            <nav className='w-3/5 flex justify-center md:justify-between items-center'>
                <h1 className='text-3xl font-extrabold'>My<span className='text-blue-400'>Info</span></h1>
                <ul className=' items-center gap-10 font-bold hidden md:flex'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <nav className='md:hidden inline-flex fixed bottom-0 w-full justify-center py-2 bg-black text-white z-20'>
                <ul className='flex w-4/5 justify-center items-center gap-20 py-2'>
                    <li className='icon-btn'>
                        <a href="#home"><ImHome className='text-sm' /></a>
                    </li>
                    <li className='icon-btn'>
                        <a href="#about"><BsInfoLg className='text-sm' /></a>
                    </li>
                    <li className='icon-btn'>
                        <a href="#project"><BiCategoryAlt className='text-sm' /></a>                      
                    </li>
                    <li className='icon-btn'>
                        <a href="#contact"><MdContactMail className='text-sm' /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
