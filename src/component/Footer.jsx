
export default function Footer() {
  return (
    <>

    <div className="footer__content">
    <div className="footer__info">

      <img className="footer__image" src="./images/image.png" alt="" />
      <h2 className="foot__number"> CALL 07475767732</h2>
</div>
      <div className="footer__list">
      <h1 className="footer__menu">Menu</h1>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
      

    </div>
    
    

    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">

          © {new Date().getFullYear()} Griffiths Landscapes. All rights reserved.
        </p>
      </div>
    </footer>

    </>
  );
}