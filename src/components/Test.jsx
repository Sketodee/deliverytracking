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

  const baseURL = process.env.REACT_APP_BASE_URL;

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
          from: "",
          currentLocation: "",
          to: "",
          receiverName: "",
          receiverAddress: "",
          receiverPhone: "",
          receiverEmail: "",
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
          from: Yup.string().required("Required"),
          to: Yup.string().required("Required"),
          receiverName: Yup.string().required("Required"),
          receiverAddress: Yup.string().required("Required"),
          receiverPhone: Yup.string()
            .required("Required")
            .matches(/^[0-9]+$/, "Please enter a valid number"),
          receiverEmail: Yup.string()
            .required("Required")
            .email("Please enter a valid email"),
          currentLocation: Yup.string().required("Required"),
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

          fetch(`${baseURL}/order/addorder`, requestOptions)
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
            <div className="row pt-4">
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
                  <option value="On Hold">On Hold</option>
                </Field>
              </div>
            </div>

            <div className="row pb-4">
              <div className="col-sm-4 col-12">
                <label htmlFor="from" className="mt-3">
                  {" "}
                  From{" "}
                  <span className="small text-danger">
                    {" "}
                    <ErrorMessage name={`from`} />{" "}
                  </span>{" "}
                </label>
                <Field className="form-control" name={`from`} />
              </div>

              <div className="col-sm-4 col-12">
                <label htmlFor="currentLocation" className="mt-3">
                  {" "}
                  Current Location{" "}
                  <span className="small text-danger">
                    {" "}
                    <ErrorMessage name={`currentLocation`} />{" "}
                  </span>{" "}
                </label>
                <Field className="form-control" name={`currentLocation`} />
              </div>

              <div className="col-sm-4 col-12">
                <label htmlFor="to" className="mt-3">
                  {" "}
                  To{" "}
                  <span className="small text-danger">
                    {" "}
                    <ErrorMessage name={`to`} />{" "}
                  </span>{" "}
                </label>
                <Field className="form-control" name={`to`} />
              </div>
            </div>

            <div className="row pb-4">
              <div className="col-sm-4 col-12">
                <label htmlFor="receiverName" className="mt-3">
                  {" "}
                  Receiver's Name{" "}
                  <span className="small text-danger">
                    {" "}
                    <ErrorMessage name={`receiverName`} />{" "}
                  </span>{" "}
                </label>
                <Field className="form-control" name={`receiverName`} />
              </div>

              <div className="col-sm-4 col-12">
                <label htmlFor="receiverAddress" className="mt-3">
                  {" "}
                  Receiver's Address{" "}
                  <span className="small text-danger">
                    {" "}
                    <ErrorMessage name={`receiverAddress`} />{" "}
                  </span>{" "}
                </label>
                <Field className="form-control" name={`receiverAddress`} />
              </div>

              <div className="col-sm-4 col-12">
                <label htmlFor="receiverPhone" className="mt-3">
                  {" "}
                  Receiver's Contact{" "}
                  <span className="small text-danger">
                    {" "}
                    <ErrorMessage name={`receiverPhone`} />{" "}
                  </span>{" "}
                </label>
                <Field className="form-control" name={`receiverPhone`} />
              </div>

              <div className="col-sm-4 col-12">
                <label htmlFor="receiverEmail" className="mt-3">
                  {" "}
                  Receiver's Email{" "}
                  <span className="small text-danger">
                    {" "}
                    <ErrorMessage name={`receiverEmail`} />{" "}
                  </span>{" "}
                </label>
                <Field className="form-control" name={`receiverEmail`} />
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
                          <div key={index} className="row  py-1">
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
