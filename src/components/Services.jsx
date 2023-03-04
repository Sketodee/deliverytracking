import React, { useState, useEffect } from 'react'
import arrow from '../assets/arrow.png'

const Services = () => {

    const from = ["Madrid", "San Jose", "Sao Paulo", "Arrkansas", "Peru", "Stockholm", "Durban", "Istanbul"]
    const from2 = ["Melbourne", "Montreal", "Tunis"]
    const to = ["Lagos", "New York", "Texas", "Marseille", "Liverpool"]
    const to2 = ["San Jose",  "Stockholm", "Durban", "Sao Paulo", "Arrkansas", "Peru"]

    const [index, setIndex] = useState(0);

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
        <div className='my-5' id='Services'>
            <div className='text-center mt-3 py-5'>
                <p className='brand-txt h5'> Our Services </p>
                <h3 className='unbounded pb-3'>Everything is ready to transport </h3>
                <div className='px-sm-5 d-flex align-items-center justify-content-center '>
                    <p className='px-sm-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti unde nobis voluptatibus quisquam nemo. Maxime doloribus officia impedit quia ipsam esse commodi eveniet aspernatur voluptates dolorum. Sit, aut reprehenderit? </p>
                </div>
            </div>


            <div className='row'> {/*d-sm-flex justify-content-between align-items-start */}
                <div className=' col-sm-6 py-4'>
                    <div className='row text-center'>
                        <div className='col-4 lh-1 '>
                            <p className='text-secondary'> <small>From</small></p>
                            <p><strong>{from[index % from.length]} </strong> </p>
                        </div>

                        <div className='col-4'>
                            <img src={arrow} alt="" className='pt-3' style={{ width: "40px" }} />
                        </div>


                        <div className='col-4 lh-1 '>
                            <p className='text-secondary'> <small> To</small></p>
                            <p> <strong>{to[index % to.length]} </strong> </p>
                        </div>
                    </div>

                    <div className='row text-center'>
                        <div className='col-4 lh-1 '>
                            <p className='text-secondary'> <small>From</small></p>
                            <p><strong>{from2[index % from2.length]} </strong> </p>
                        </div>

                        <div className='col-4'>
                            <img src={arrow} alt="" className='pt-3' style={{ width: "40px" }} />
                        </div>


                        <div className='col-4 lh-1'>
                            <p className='text-secondary'> <small> To</small></p>
                            <p> <strong>{to2[index % to2.length]} </strong> </p>
                        </div>
                    </div>

                    {/* <form class=" row">
                        <div class="form-group ms-lg-5 col-8">
                            <input type="text" class="form-control" id="inputPassword2" placeholder="enter tracking ID"/>
                        </div>
                        <div className="col-3">
                             <button type="submit" class="btn btn-primary brand-bg"> Search </button>
                        </div>
                    </form> */}

                </div>
                <div className=' col-sm-6 py-3'>
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
