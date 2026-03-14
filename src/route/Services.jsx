import data from "../assets/data"
import Service from "../component/Service"

export default function Services() {
  return (

    <>
     <main className="services">

      <section className="service__container">
        <h1 className="service__header">Our Services</h1>
        <p className="services__text">
          We offer an extensive range of services, from installation and upgrades to maintenance and emergency repairs. Safety is our number one priority. 
          We work safely and strive to create a safe environment for every client. 
          We never cut corners or take shortcuts. Your satisfaction is our only priority.
        </p>
      </section>
      
    <div className="service__items">
      {data.map(item => (
        <Service
          key={item.id}
          {...item}
        />
      ))}

    </div>
 </main>

    </>
  )
}