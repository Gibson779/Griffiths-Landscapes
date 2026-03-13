export default function Home(){
    return(
        <>
     
      <div className="home__container">

      <div className="home__image-wrap">
      <img src="../images/Home Image.jpg" alt="Home" className="home__image" />

      <div className="home__text">
      <h1 className="home__title">LANDSCAPE AND GARDENING SERVICE</h1>
      <p>
        Transform your outdoor space with trusted paving and landscaping solutions from a skilled local team in Greater Manchester. 
        We bring over a decade of experience to every job, offering high-quality finishes that improve the look and function of your home. 
       </p>
       <div className="home__call">
        <h1 className="call">Call us 078586848338</h1>
       </div>

       


       </div>
       </div>
       </div>

       <section className="about">
       <div className="about__container">

        <div className="about__text">
        <h1 className="about__header">ABOUT US</h1>

        <p > 
            We take pride in providing homeowners across Greater Manchester with tailored paving and landscaping solutions that match their needs, style and budget. Our approach is built around careful planning, skilled execution, and durable materials. From initial consultation through to completion, our experienced team ensures a smooth, professional service. Every surface we lay and every space we shape is designed to enhance your property and stand up to the UK’s changing weather conditions.
            Whether it's a new driveway, a garden revamp, or seasonal maintenance, we approach every project with professionalism, care and a genuine desire to help you make the most of your outdoor space. 
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

  </div>
</section>
        </>
    )
}