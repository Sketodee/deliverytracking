import React from 'react'

const Testimonials = () => {
    return (
        <div className='my-5'>
            <div className='d-sm-flex justify-content-between align-items-center py-5 mt-5 mb-3'>
                <div >
                    <p className='maroon-txt h5'> Testimonials </p>
                    <h3 className='unbounded fs-2'> Sound from our happy customers</h3>
                </div>

                <div className='lh-1'>
                    <p className='unbounded fs-3'><strong>   8 <span className='maroon-txt'>+</span> </strong></p>
                    <p> Awards and counting  </p>
                </div>

                <div className='lh-1'>
                    <p className='unbounded fs-3'><strong>   100K <span className='maroon-txt'>+</span> </strong></p>
                    <p> Hppy Customers around the world </p>
                </div>
            </div>


            <div className='row'>
                <div id="carouselExampleAutoplaying" class="carousel slide offset-sm-3 col-sm-6 text-center" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <p> "I've used other delivery companies in the past, but none of them compare to Cicero's level of customer service. They truly go above and beyond for their customers." </p>
                            <p className='fw-bold fst-italic'> - Christina Luigi  </p>
                        </div>
                        <div class="carousel-item">
                            <p> "I've used Cicero's for all of my shipping needs and I have to say, I've been consistently impressed with their speed and reliability." </p>
                            <p className='fw-bold fst-italic'> - Martha Thiahahu  </p>
                        </div>
                        <div class="carousel-item">
                            <p> "As a small business owner, I rely on Cicero to ship my products to customers all over the world. They've never let me down and I'm grateful for their excellent service." </p>
                            <p className='fw-bold fst-italic'> - Petra Davies </p>
                        </div>
                        <div class="carousel-item">
                            <p> "I was worried about shipping some fragile items, but Cicero handled them with the utmost care and they arrived in perfect condition."</p>
                            <p className='fw-bold fst-italic'> - Mick Reeves </p>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Testimonials