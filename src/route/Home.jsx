import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home(){
    return(
        <>


    <div>
      <Helmet>
        <title>Griffiths Landscapes</title>
        <meta
          name="description"
          content="Expert landscaping services in Glossop. Garden design, patios, turfing & maintenance. Transform your outdoor space—get a free quote today."
        />
      </Helmet>
   </div>
     
      <div className="home__container">

      <div className="home__image-wrap">
      <img src="../images/Home Image.jpg" alt="Home" className="home__image" />

      <div className="home__text">
      <h1 className="home__title">LANDSCAPE AND GARDENING SERVICE</h1>
      <p>
        Transform your outdoor space with trusted paving and landscaping solutions from a skilled local team in Glossop & local surrounding areas.
        We bring over a decade of experience to every job, offering high-quality finishes that improve the look and function of your home. 
       </p>
       <div className="home__call">
        <h2 className="call">Call - 07359303877</h2>
       </div>
       </div>
       </div>
       </div>

       <section className="about">
       <div className="about__container">

        <div className="about__text">
        <h1 className="about__header">ABOUT US</h1>

        <p className="about__paragraph"> 
           We take pride in delivering high-quality landscaping, patio and decking construction services for homeowners across Tameside. Every project we undertake is tailored to suit your needs, style, and budget. Our approach focuses on careful planning, skilled craftsmanship, and the use of durable materials that are built to last.
           From the initial consultation through to the final touches, our experienced team ensures a smooth and professional service. Whether we're designing a landscaped garden, installing a new patio or decking area, or completing general construction work to improve your outdoor space, we work with attention to detail and a commitment to quality.
           Every driveway, garden feature, and outdoor surface we create is designed to enhance your property while standing up to the UK's changing weather conditions. Whether you're looking for a full garden transformation, a new patio or decking area, or reliable seasonal maintenance, we approach every project with professionalism, care, and a genuine passion for helping you make the most of your outdoor space.
        </p>
        </div>

        <img src="./gallery/1.jpg" alt="About" className="about__image" />
       </div>
       </section>

      <section className="getintouch">
        <div className="get__intouch">

    <img
      src="../images/garden4.JPG"
      alt="GetinTouch"
      className="get__intouch-img"
    />

    <div className="get__intouch-overlay">
      <h1 className="get__intouch-text">Get In Touch</h1>

      <p className="get__intouch-para">
        Whether you need a new driveway, garden upgrade or expert advice,
        we’re here to help. Reach out now for a free quote or to chat with
        our friendly team.
      </p>
    </div>

    <div className="button__home">
        <Link to="/contact">
        <button>Contact us</button>
        </Link>
       
    </div>

  </div>
</section>
        </>
    )
}