import * as Yup from "yup";

import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";

import React from "react";

const Test = () => {
    return (
        <div className="container">
            <h3>Create New Order </h3>
            <hr />
            <Formik
                initialValues={{
                    deliveryDate: '',
                    shippedBy: '',
                    status: '',
                    items: [
                        {
                            name: "deshan madurajith",
                            price: "desh@email.com"
                        },
                        {
                            name: "Hello Desh",
                            price: "hello@email.com"
                        }
                    ],
                }}
                validationSchema={Yup.object({
                    items: Yup.array().of(
                        Yup.object().shape({
                            name: Yup.string().required("Name required"),
                            price: Yup.string()
                                .required("email required")
                        })
                    ),
                    deliveryDate: Yup.string().required('Required'),
                    shippedBy: Yup.string().required('Required'),
                    status: Yup.string().required('Required'),
                })}

                onSubmit={values => alert(JSON.stringify(values, null, 2))}

                render={({ values }) => (
                    <Form>
                        <div className="row">
                            <div className="col-4">
                            <label htmlFor="deliveryDate" className="mt-3"> Item Name <span>  <ErrorMessage name={`deliveryDate`} /> </span> </label>
                                <Field className="form-control" placeholder="deliveryDate" name={`deliveryDate`} />
                               
                            </div>
                            <div className="col-4">
                            <label htmlFor="name" className="mt-3"> Item Name <span> <ErrorMessage name={`shippedBy`} /> </span> </label>
                                <Field className="form-control" placeholder="shippedBy" name={`shippedBy`} />
                            </div>
                            <div className="col-4">
                            <label htmlFor="name" className="mt-3"> Item Name <span><ErrorMessage name={`status`} /> </span> </label>
                                <Field className="form-control" placeholder="status" name={`status`} />
                            </div>
                        </div>

                        <h5>Add items </h5>
                        <FieldArray
                            name="items"
                            render={arrayHelpers => {
                                const items = values.items;
                                return (
                                    <div>
                                        {items && items.length > 0
                                            ? items.map((item, index) => (
                                                <div key={index} className="row  border border-success">
                                                    <div className="col-5">
                                                    <label htmlFor="name" className="mt-3"> Item Name <span> <ErrorMessage name={`items.${index}.name`} /> </span> </label>
                                                    <Field
                                                        placeholder="user name"
                                                        name={`items.${index}.name`}
                                                        className = "form-control"
                                                    />
                                                    </div>
                                                    <div className="col-5">
                                                        <label htmlFor="name" className="mt-3"> Item Price <span> <ErrorMessage name={`items.${index}.price`} /> </span> </label>
                                                        <Field
                                                            placeholder="price"
                                                            name={`items.${index}.price`}
                                                            className = "form-control"
                                                        />
                                                    </div>
                                                    <div className="col-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                    >
                                                        Remove Item
                                                    </button>
                                                    </div>
                                                    {/* <Field
                                                        placeholder="user name"
                                                        name={`items.${index}.name`}
                                                    />
                                                    <ErrorMessage name={`items.${index}.name`} />
                                                    <br />

                                                    <Field
                                                        placeholder="user item"
                                                        name={`items.${index}.price`}
                                                    />
                                                    <ErrorMessage name={`items.${index}.price`} />

                                                    <br />

                                                    <button
                                                        type="button"
                                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                    >
                                                        -
                                                    </button>
                                                    <br />
                                                    <br /> */}
                                                </div>
                                            ))
                                            : null}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                arrayHelpers.push({
                                                    name: "",
                                                    price: ""
                                                })
                                            } // insert an empty string at a position
                                        >
                                            add a User
                                        </button>
                                        <br />
                                        <br />
                                        <br />
                                        <div>
                                            <button type="submit">Form Submit</button>
                                        </div>
                                    </div>
                                );
                            }}
                        />
                        <hr />
                    </Form>
                )}
            />
        </div>
    )
}

export default Test