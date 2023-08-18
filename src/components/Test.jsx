import * as Yup from "yup";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-datepicker/dist/react-datepicker.css";
import DatePickerField from "./DatePickerField";
import OrderList from "./OrderList";

const Test = () => {
  const notify = (toastType, message) =>
    toastType(message, {
      position: "top-center",
      theme: "colored",
      autoClose: 2000,
    });

  return (
    <div className="container">
      <ToastContainer />
      <h3>Create New Order </h3>
      <hr />
      <Formik
        initialValues={{
          deliveryDate: "",
          shippedBy: "",
          status: "",
          items: [
            {
              name: "",
              price: "",
            },
          ],
        }}
        validationSchema={Yup.object({
          items: Yup.array().of(
            Yup.object().shape({
              name: Yup.string().required("Required"),
              price: Yup.string()
                .matches(
                  /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                  "Not valid"
                )
                .required("Required"),
            })
          ),
          deliveryDate: Yup.string().required("Required"),
          shippedBy: Yup.string().required("Required"),
          status: Yup.string().required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          };

          fetch("http://localhost:3900/api/order/addorder", requestOptions)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.status);
              }
              notify(toast.success, "Order Created Successfully");
              resetForm({ values: "" });
              return response.json();
            })
            .catch((error) => {
              // console.log(error.message);
              notify(toast.error, "Error Creating Order");
            });
        }}
        render={({ values }) => (
          <Form>
            <div className="row py-4">
              <div className="col-sm-4 col-12">
                <label htmlFor="deliveryDate" className="mt-3 ">
                  {" "}
                  Delivery Date{" "}
                  <span className="small text-danger">
                    {" "}
                    <ErrorMessage name={`deliveryDate`} />{" "}
                  </span>{" "}
                </label>
                {/* <Field className="form-control"  name={`deliveryDate`} /> */}
                <DatePickerField
                  className="form-control"
                  name={`deliveryDate`}
                />
              </div>
              <div className="col-sm-4 col-12">
                <label htmlFor="shippedBy" className="mt-3">
                  {" "}
                  Shipped By{" "}
                  <span className="small text-danger">
                    {" "}
                    <ErrorMessage name={`shippedBy`} />{" "}
                  </span>{" "}
                </label>
                <Field className="form-control" name={`shippedBy`} />
              </div>
              <div className="col-sm-4 col-12">
                <label htmlFor="status" className="mt-3">
                  {" "}
                  Status{" "}
                  <span className="small text-danger">
                    <ErrorMessage name={`status`} />{" "}
                  </span>{" "}
                </label>
                <Field className="form-control" name={`status`} as="select">
                  <option value=""> Select a status </option>
                  <option value="Order Confirmed">Order Confirmed </option>
                  <option value="Picked By Courier">Picked By Courier</option>
                  <option value="On The Way"> On The Way </option>
                  <option value="Ready For Pickup">Ready For Pickup</option>
                </Field>
              </div>
            </div>

            <h5>Add items </h5>
            <FieldArray
              name="items"
              render={(arrayHelpers) => {
                const items = values.items;
                return (
                  <div className="py-2">
                    {items && items.length > 0
                      ? items.map((item, index) => (
                          <div key={index} className="row  py-2">
                            <div className="col-5">
                              <label htmlFor="name" className="mt-3">
                                {" "}
                                Name{" "}
                                <span className="small text-danger">
                                  {" "}
                                  <ErrorMessage
                                    name={`items.${index}.name`}
                                  />{" "}
                                </span>{" "}
                              </label>
                              <Field
                                name={`items.${index}.name`}
                                className="form-control"
                              />
                            </div>
                            <div className="col-5">
                              <label htmlFor="name" className="mt-3">
                                {" "}
                                Price{" "}
                                <span className="small text-danger">
                                  {" "}
                                  <ErrorMessage
                                    name={`items.${index}.price`}
                                  />{" "}
                                </span>{" "}
                              </label>
                              <Field
                                name={`items.${index}.price`}
                                className="form-control"
                              />
                            </div>
                            <div className="col-2 mt-4">
                              <button
                                type="button"
                                className="btn btn-danger mt-3"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                <span className="icon">
                                  {" "}
                                  <i className="fa fa-trash"></i>{" "}
                                </span>
                              </button>
                            </div>
                          </div>
                        ))
                      : null}
                    <button
                      className="btn btn-success text-white my-2"
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          name: "",
                          price: "",
                        })
                      } // insert an empty string at a position
                    >
                      Add New Item
                    </button>
                    <br />
                    <br />
                    <br />
                    <div>
                      <button
                        className="btn btn-warning maroon-bg text-dark"
                        type="submit"
                      >
                        Create Order
                      </button>
                    </div>
                  </div>
                );
              }}
            />
            <hr />
          </Form>
        )}
      />

      <hr />
      <div className="my-3">
        <OrderList />
      </div>
    </div>
  );
};

export default Test;
