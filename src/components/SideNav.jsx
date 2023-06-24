import React from 'react';
import "../style.css";
import { FaUser, FaBookmark, FaHome, FaSearch } from "react-icons/fa"

const SideNav = () => {
  return (
    <div className='col s3'>
      < ul className='sidenav sidenav-fixed sidenav-align' >
        <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
          <a className='icon black-text nav-icon right'>
            <FaUser className="icons" />
          </a>
          <b className='right'>Profile</b></a></li>
        <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
          <a className='icon black-text nav-icon right'>
            <FaHome className="icons" />
          </a>
          <b className='right'>Feed</b></a></li>
        <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
          <a className='icon black-text nav-icon right'>
            <FaSearch className="icons" />
          </a>
          <b className='right'>Explore</b></a></li>
        <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
          <a className='icon black-text nav-icon right'>
            <FaBookmark className="icons" />
          </a>
          <b className='right'>Bookmark</b></a></li>
      </ul >
    </div >

  )
}

export default SideNav;