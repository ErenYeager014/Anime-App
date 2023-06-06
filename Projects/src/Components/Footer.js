import React from 'react'
import { FaFacebookF,FaDiscord } from 'react-icons/fa';
import { BsInstagram,BsTwitter } from 'react-icons/bs';
function Footer() {
  return (
    <>
    <div className='Footer'>
        <div className='title'>
            <h2>
                Anime
            </h2>
            <h3>
                get anime based on your desire,manga and so on
            </h3>
        </div>
        <div className='social-media'>
            <div className='icons icons-1'>
                <FaFacebookF />
            </div>
            <div className='icons icons-2' >
                <BsInstagram />
            </div>
            <div className='icons icons-3' >
                <BsTwitter   />
            </div>
            <div className='icons icons-4'>
                <FaDiscord   />
            </div>
        </div>
        <div className='options'>
            <a href='#' >Contact</a>
            <a href='#' >Terms and Conditions</a>
            <a href='#' >privacy policy</a>
            <a href='#' >About</a>
        </div>
    </div>
    </>
  )
}

export default Footer