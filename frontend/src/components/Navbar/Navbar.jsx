import React,{useState} from 'react';
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


import './Navbar.scss';
// import {images} from '../../constants';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.mylogo} alt="logo" />  */}
        <a className="my-text" href="#home"> <h4>RAJEEV SAHU</h4> </a>
      </div>
      <ul className="app__navbar-links">
        {['home','about','work','skills','contact'].map((item)=>(
          <li key={`link-${item}`}>
            <div />
            <a className="app__flex p-text" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
         <HiMenuAlt4 onClick={()=>setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{x:[300,0]}}
            transition={{duration:0.85,ease:'easeOut'}}
          >
          <HiX onClick={()=>setToggle(false)} />
          <ul>
          {['home','about','work','skills','contact'].map((item)=>(
          <li key={item}>
            <a href={`#${item}`} onClick={()=>setToggle(false)} >{item}</a>
          </li>
        ))}
        </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;