import React, { useState, useEffect } from 'react'
import arrow from '../assets/arrow.png'

const Services = () => {

    const from = ["Madrid", "San Jose", "Sao Paulo", "Arrkansas"]
    const to = ["Lagos", "New York", "Texas"]

    const [index, setIndex] = useState(0);

    const [shipId, setShipId] = useState(4902)

    useEffect(() => {
        const tick = () => setIndex(i => i + 1);

        const id = setInterval(tick, 2000);

        // const randomTicker = setInterval(() => {
        //     var random = Math.floor(Math.random() * 9999) + 1000
        //     setShipId(random)
        // }, 5000);


        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <div className='text-center mt-3 py-5'>
                <p className='maroon-txt'> Our Services </p>
                <h3 className='unbounded'>Everything is ready to transport </h3>
                <div className='px-sm-5 d-flex align-items-center justify-content-center '>
                    <p className='px-sm-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti unde nobis voluptatibus quisquam nemo. Maxime doloribus officia impedit quia ipsam esse commodi eveniet aspernatur voluptates dolorum. Sit, aut reprehenderit? </p>
                </div>
            </div>


            <div className='row'> {/*d-sm-flex justify-content-between align-items-start */}
                <div className=' col-sm-6'>
                    <div className='row text-center'>
                        <div className='col-4 '>
                            <p className='text-secondary'> <small>From</small></p>
                            <p><strong>{from[index % from.length]} </strong> </p>
                        </div>

                        <div className='col-4'>
                            <img src={arrow} alt="" className='pt-3' style={{ width: "40px" }} />
                        </div>


                        <div className='col-4 '>
                            <p className='text-secondary'> <small> To</small></p>
                            <p> <strong>{to[index % to.length]} </strong> </p>
                        </div>
                    </div>

                    <div className='row text-center'>
                        <div className='col-4 '>
                            <p className='text-secondary'> <small>From</small></p>
                            <p><strong>{from[index % from.length]} </strong> </p>
                        </div>

                        <div className='col-4'>
                            <img src={arrow} alt="" className='pt-3' style={{ width: "40px" }} />
                        </div>


                        <div className='col-4 '>
                            <p className='text-secondary'> <small> To</small></p>
                            <p> <strong>{to[index % to.length]} </strong> </p>
                        </div>
                    </div>

                    <form class=" row px-5">
                        <div class="form-group col-6">
                            <input type="text" class="form-control" id="inputPassword2" placeholder="enter tracking ID"/>
                        </div>
                        <div className="col-6">
                             <button type="submit" class="btn btn-primary"> Search </button>
                        </div>
                       
                    </form>

                </div>
                <div className=' col-sm-6'>
                    <h3 className='unbounded'> Inland and Ocean Shipping Solutions </h3>
                    <p>We provide both inland and ocean express shipping to make your company's logistic's delivery more faster and efficient </p>
                    <ul>
                        <li>Best in class shipping services</li>
                        <li>Wide and safe route of shipments</li>
                        <li>Intercontinental network </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services
