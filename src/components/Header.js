import logo from '../utils/images/logo.png'
import { useState } from 'react';

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login")
   
  console.log('rendering header')
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src={logo}/>
        <h1 className="company-name">CrunchyCab</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
            className="login" 
            onClick={()=> {
              btnNameReact === 'Login' 
              ? setBtnNameReact('Logout')
              : setBtnNameReact('Login')
              }}>
                 <span>{btnNameReact}</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
