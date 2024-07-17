import React, { useState } from "react";
import "./Tracking.css";
import TrackingDetails from "./TrackingDetails";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form } from "formik";

const Tracking = () => {
  const [order, setOrder] = useState({});

  const baseURL = process.env.REACT_APP_BASE_URL;

  const notify = (toastType, message) =>
    toastType(message, {
      position: "top-center",
      theme: "colored",
      autoClose: 2000,
    });

  return (
    <div className="container py-3">
      <ToastContainer />
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };

          fetch(
            `${baseURL}/order/getorderbytrackingid?trackingId=${values.name}`,
            requestOptions
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.status);
              }
              return response.json();
            })
            .then((data) => {
              if (data == null) {
                notify(
                  toast.error,
                  "Couldn't find order with that tracking number"
                );
              } else {
                resetForm({ values: "" });
                setOrder((order) => ({
                  ...order,
                  ...data,
                }));
              }
            })
            .catch((error) => {
              // console.log(error.message);
              notify(toast.error, "Invalid Tracking Number");
            });
        }}
      >
        {(formik) => (
          <Form>
            <div className="d-flex justify-content-center">
              <div className=" col-8">
                <Field
                  placeholder="enter tracking ID"
                  className="form-control"
                  name="name"
                  type="text"
                />
                <p>
                  {" "}
                  {formik.touched.name && formik.errors.name ? (
                    <span className="small text-danger">
                      {formik.errors.name}
                    </span>
                  ) : null}{" "}
                </p>
              </div>

              <div className="col-2 offset-1">
                <button
                  className="btn btn-warning maroon-bg text-dark"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div>
        {Object.keys(order).length > 0 ? (
          <TrackingDetails order={order} />
        ) : (
          <div className="py-5">
            {" "}
            <div className="py-5">
              {" "}
              <div className="py-5">
                {" "}
                <div className="py-5 text-center"> No order yet </div>
              </div>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};


export default Tracking;
