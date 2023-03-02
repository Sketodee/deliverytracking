import React from 'react'
import globe from '../assets/globe.png'
import key from '../assets/key.png'
import folder from '../assets/folder.png'

const About = () => {
  return (
    <div id='About'>
        <div className='d-sm-flex justify-content-between align-items-center py-5'>
            <div >
                <p className='maroon-txt h5'> About </p>
                <h3 className='unbounded fs-2'> Solutions for your business need</h3>
            </div>
            <div>
                <p> We make logistic shipping much easier and straightforward. Combining good service and technology makes everything different </p>
            </div>
        </div>

        <div  className='row '>
                <div className="col-12 col-sm-4 hover-effect">
                    <div class="card border-0 px-2">
                        <div class="card-body">
                            <img src= {folder} className="my-4" alt="" width="60px"/>
                        <h4 class="card-title unbounded">One place to save all your documents</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4 hover-effect">
                <div class="card border-0 px-2">
                        <div class="card-body">
                        <img src= {globe} className="my-4" alt=""  width="60px"/>
                            <h4 class="card-title unbounded">Your intercontinental shipping solutions</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4 hover-effect">
                    <div class="card border-0 px-2">
                        <div class="card-body">
                        <img src= {key} className="my-4" alt="" width="60px" />
                        <h4 class="card-title unbounded">Safe, Fast , Transparent and Reliable</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default About