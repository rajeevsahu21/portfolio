import React from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/rajeevsahu21" target="_blank"><FaLinkedinIn /></a> 
        </div>
        <div>
            <a href="https://twitter.com/rajeevsahu21" target="_blank"><BsTwitter /></a> 
        </div>
        <div>
            <a href="https://facebook.com/rajeevsahu21" target="_blank"><FaFacebookF /></a> 
        </div>
        <div>
            <a href="https://instagram.com/rajeevsahu21" target="_blank"><BsInstagram /></a> 
        </div>
    </div>
  )
}

export default SocialMedia;