import { LOGO_URL } from "../utils/constants";
import {logo} from '../utils/images/logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src={LOGO_URL}/>
        <h1 className="company-name">CrunchyCab</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
