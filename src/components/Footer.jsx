import React from 'react'

const Footer = () => {
  return (
    <div className='brand-bg py-5 text-dark'>
        <div className='container pt-4'>
            <div className="row">
                <div className="col-sm-6 py-2">
                        <h5 className='unbounded'>Cristex </h5>
                        <p className='w-75'>Cristex is a shipping company that helps you transport your logistics without worry anymore </p>
                        <p>All rights reserved, 2023 </p>
                </div>
                <div className="col-sm-2 lh-1 py-2">
                        <h6 className='unbounded'> About </h6>
                        <p> <small> Insurance</small> </p>
                        <p><small>Resource</small> </p>
                        <p><small>Terms and Condition</small></p>
                </div>
                <div className="col-sm-2 lh-1 py-2">
                        <h6 className='unbounded'>Services</h6>
                        <p><small>Inland Shipment</small> </p>
                        <p><small>Overseas Shipment</small> </p>
                        <p><small>Continental Shipment</small></p>
                        <p><small> Intercontinental Shipment</small> </p>
                </div>
                <div className="col-sm-2 lh-1 py-2">
                    <h6 className='unbounded'>Routes </h6>
                    <p><small>European Route</small> </p>
                    <p><small>American Route</small> </p>
                    <p><small>Asian Route </small></p>
                    <p><small>African Route</small> </p>
                </div>
            </div>
        </div>
          
    </div>
  )
}

export default Footer