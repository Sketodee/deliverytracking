import React from "react";
import item from "../assets/item.png";
import { Link } from "react-router-dom";

const TrackingDetails = ({ order }) => {
  return (
    <div className="card">
      <header className="card-header"> My Orders / Tracking </header>
      <div className="card-body">
        <h6>Order ID: {order.orderId} </h6>
        <div className="card ">
          <div className="card-body row">
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>Estimated Delivery time:</strong> <br />{" "}
              {order.deliveryDate.slice(0, -14)}{" "}
            </div>
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>Shipping By:</strong> <br /> {order.shippedBy}{" "}
            </div>
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>Status:</strong> <br /> {order.status}{" "}
            </div>
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>Tracking #:</strong> <br /> {order.trackingId}{" "}
            </div>
          </div>

          <div className="card-body row">
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>Receiver's Name</strong> <br /> {order.receiverName}{" "}
            </div>
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>Receiver's Address</strong> <br /> {order.receiverAddress}{" "}
            </div>
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>Receiver's Contact</strong> <br /> {order.receiverPhone}{" "}
            </div>
            <div className="col-6 col-sm-3 py-1">
              <strong>Receiver's Email</strong> <br /> {order.receiverEmail}
            </div>
          </div>

          <div className="card-body row">
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>From:</strong> <br /> {order.from}{" "}
            </div>
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>Current Location:</strong> <br /> {order.currentLocation}{" "}
            </div>
            <div className="col-6 col-sm-3 py-1">
              {" "}
              <strong>Final Location:</strong> <br /> {order.to}{" "}
            </div>
            <div className="col-6 col-sm-3 py-1"></div>
          </div>
        </div>
        <div className="track">
          <div
            className={`step ${
              order.status.includes("Order") ||
              order.status.includes("Picked") ||
              order.status.includes("On") ||
              order.status.includes("Ready")
                ? "active"
                : null
            }`}
          >
            {" "}
            <span className="icon">
              {" "}
              <i className="fa fa-check"></i>{" "}
            </span>{" "}
            <span className="text">Order Confirmed</span>{" "}
          </div>
          <div
            className={`step ${
              order.status.includes("Picked") ||
              order.status.includes("On") ||
              order.status.includes("Ready")
                ? "active"
                : null
            }`}
          >
            {" "}
            <span className="icon">
              {" "}
              <i className="fa fa-user"></i>{" "}
            </span>{" "}
            <span className="text"> Picked By Courier</span>{" "}
          </div>
          <div
            className={`step ${
              order.status.includes("On") || order.status.includes("Ready")
                ? "active"
                : null
            }`}
          >
            {" "}
            <span className="icon">
              {" "}
              <i className="fa fa-truck"></i>{" "}
            </span>{" "}
            <span className="text"> On The Way </span>{" "}
          </div>
          <div
            className={`step ${
              order.status.includes("Ready") ? "active" : null
            }`}
          >
            {" "}
            <span className="icon">
              {" "}
              <i className="fa fa-box"></i>{" "}
            </span>{" "}
            <span className="text">Ready For Pickup</span>{" "}
          </div>
        </div>

        <ul className="row  py-5">
          {order.items.map((orderItem, index) => (
            <li className="col-md-4" key={index}>
              <figure className="itemside mb-3">
                <div className="aside">
                  <img src={item} className="img-sm border" alt="" />
                </div>
                <figcaption className="info align-self-center">
                  <p className="title">
                    {orderItem.name} <br />{" "}
                  </p>{" "}
                  <span className="text-muted">${orderItem.price} </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <h4 className="fw-bold">
          {" "}
          TOTAL: ${order.items.reduce((sum, item) => sum + item.price, 0)}{" "}
        </h4>

        <hr />
        <Link
          to="/"
          className="btn btn-warning maroon-bg text-dark"
          data-abc="true"
        >
          {" "}
          <i className="fa fa-chevron-left"></i> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TrackingDetails;
