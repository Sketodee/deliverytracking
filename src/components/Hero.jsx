import React from 'react'
import cargoShip from "../assets/cargoShip.jpg"

const Hero = () => {
  return (
    <div className='py-5 text-center'>
        <h2 className='unbounded fs-1 py-3'>
            Grow your business. <span className='maroon-txt'> We will take care </span> of all your logistics
        </h2>
        <p> Its time to adapt your business to keep up with how the world of commerce is evolving. Onelineize your offline logistics service, Booking, controlling, and monitoring your shipments are all simple with Cicero</p>
        <div className='d-flex justify-content-center align-items-center pb-5'> 
        <button className="btn btn-primary maroon-bg mx-3" type="submit" >Book a call</button>
        <button className="btn btn-outline-secondary mx-3 " type="submit" >Start Tracking</button>
        </div>
        {/* <img src={cargoShip} alt="text" className='img-fluid' height="100px"/> */}
        <div class="bg-image" 
            style={{backgroundImage: `url(${cargoShip})`, height: "50vh",  backgroundSize: "cover"}}>
        </div>
    </div>
  )
}

export default Hero
