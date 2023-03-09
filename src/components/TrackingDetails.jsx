import React from 'react'
import item from "../assets/item.png"
import { Link } from 'react-router-dom';

const TrackingDetails = ({order}) => {

  return (
    <div className='card'>
                <header className="card-header"> My Orders / Tracking </header>
                <div className="card-body">
                    <h6>Order ID: {order.orderId}  </h6>
                    <div className="card ">
                        <div className="card-body row">
                            <div className="col"> <strong>Estimated Delivery time:</strong> <br /> {order.deliveryDate.slice(0, -14)} </div>
                            <div className="col"> <strong>Shipping BY:</strong> <br /> {order.shippedBy} </div>
                            <div className="col"> <strong>Status:</strong> <br /> {order.status} </div>
                            <div className="col"> <strong>Tracking #:</strong> <br /> {order.trackingId} </div>
                        </div>
                    </div>
                    <div className="track">
                        <div className={`step ${order.status.includes("Order") ? "active" : null }`}> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                        <div className={`step ${order.status.includes("Order") || order.status.includes("Picked") ? "Active" : null }`}> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                        <div className={`step ${order.status.includes("Order") || order.status.includes("Picked") || order.status.includes("Way") ? "Active" : null }`}> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                        <div className={`step ${order.status.includes("Order") ||order.status.includes("Picked") || order.status.includes("Way") || order.status.includes("Ready") ? "Active" : null }`}> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                    </div>

                    

                    <ul className="row  py-5">
                    {order.items.map((orderItem, index) =>
                         <li className="col-md-4">
                         <figure className="itemside mb-3">
                             <div className="aside"><img src={item} className="img-sm border" /></div>
                             <figcaption className="info align-self-center">
                                 <p className="title">{orderItem.name} <br /> </p> <span className="text-muted">${orderItem.price} </span>
                             </figcaption>
                         </figure>
                     </li>
                     )}
                        
                    </ul>

                    <hr />
                    <Link to="/" className="btn btn-warning maroon-bg text-dark" data-abc="true"> <i className="fa fa-chevron-left"></i> Back to Home</Link>

                </div>

            </div>
  )
}

export default TrackingDetails