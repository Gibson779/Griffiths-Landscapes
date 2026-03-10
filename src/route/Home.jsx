export default function Home(){
    return(
        <>
      <div className="home__container">
      <img src="../images/Home Image.jpg" alt="Home" className="home__image" />
       </div>

       <div className="about__container">
        <h1 className="about__header">ABOUT US</h1>
        <p className="about__text">We take pride in providing homeowners across Greater Manchester with tailored paving and landscaping solutions that match their needs, style and budget. Our approach is built around careful planning, skilled execution, and durable materials. From initial consultation through to completion, our experienced team ensures a smooth, professional service. Every surface we lay and every space we shape is designed to enhance your property and stand up to the UK’s changing weather conditions.
Whether it's a new driveway, a garden revamp, or seasonal maintenance, we approach every project with professionalism, care and a genuine desire to help you make the most of your outdoor space. </p>
        <img src="./gallery/1.jpg" alt="About" className="about__image" />


       </div>

        </>
    )
}