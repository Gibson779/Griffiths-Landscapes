import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>

    <div className="footer__top">

    <div className="footer__info">
      <img className="footer__image" src="./images/image.png" alt="" />
      <h2 className="footer__number"> CALL 07475767732</h2>
    </div>

      
      <div className="footer__list1">
      <h1 className="footer__menu">Menu</h1>
      <ul>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/services">
        <li>Services</li>
        </Link>
        <Link to="/gallery">
        <li>Gallery</li>
        </Link>
        <Link to="/about">
        <li>About</li>
        </Link>
        <Link to="/contact">
        <li>Contact</li>
        </Link>
      </ul>
      </div>

      <div className="footer__list">
      <h1 className="footer__menu">Services</h1>
      <ul>
        <li>Landscape Gardening</li>
        <li>Patio</li>
        <li>Fencing</li>
        <li>Drive Ways</li>
        <li>Maintenace</li>
        <li>Decking</li>
      </ul>
      </div>
      
      

    </div>
    
    <hr className="footer__line" />

    <footer className="footer__bottom">

      <div className="footer__container">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Griffiths Landscapes. All rights reserved.
        </p>

      </div>
    </footer>

    </>
  );
}