import React from 'react'
import globe from '../assets/globe.png'
import key from '../assets/key.png'
import folder from '../assets/folder.png'

const About = () => {
    return (
        <div id='About'>
            <div className='d-sm-flex justify-content-between align-items-center py-5'>
                <div >
                    <p className='brand-txt h5'> About </p>
                    <h3 className='unbounded fs-2'> Solutions for your business need</h3>
                </div>
                <div>
                <p> Our mission is to make the package tracking process as easy and transparent as possible. We work with a wide range of shipping carriers to provide you with accurate tracking information, and we are committed to delivering exceptional customer service.</p>
                    <p> We make logistic shipping much easier and straightforward. Combining good service and technology makes everything different </p>
                </div>
            </div>

            <div className='row '>
                <div className="col-12 col-sm-4 hover-effect">
                    <div className="card border-0 px-2">
                        <div className="card-body">
                            <img src={globe} className="my-4 brand-txt" alt="" width="60px" />
                            <h4 className="card-title unbounded">Your intercontinental shipping solutions</h4>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4 hover-effect">
                    <div className="card border-0 px-2">
                        <div className="card-body">
                            <img src={folder} className="my-4" alt="" width="60px" />
                            <h4 className="card-title unbounded">Real-time tracking support</h4>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4 hover-effect">
                    <div className="card border-0 px-2">
                        <div className="card-body">
                            <img src={key} className="my-4" alt="" width="60px" />
                            <h4 className="card-title unbounded">Safe, Fast , Transparent and Reliable</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About