import React from 'react'

const About = () => {
  return (
    <div>
        <div className='d-sm-flex justify-content-between align-items-center py-5'>
            <div >
                <p className='maroon-txt'> About </p>
                <h3 className='unbounded fs-2'> Solutions for your business need</h3>
            </div>
            <div>
                <p> We make logistic shipping much easier and straightforward. Combining good service and technology makes everything different </p>
            </div>
        </div>

        <div  className='row '>
                <div className="col-12 col-sm-4">
                    <div class="card border-0">
                        <div class="card-body">
                        <h4 class="card-title unbounded">One place to save all your documents</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4">
                <div class="card border-0">
                        <div class="card-body">
                            <h4 class="card-title unbounded">Your intercontinental shipping solutions</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4">
                    <div class="card border-0">
                        <div class="card-body">
                        <h4 class="card-title unbounded">Safe, Fast , Transparent and Reliable</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default About