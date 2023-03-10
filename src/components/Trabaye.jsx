import React from 'react'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik , Field, Form} from 'formik'



const Trabaye = () => {

    const notify = (toastType, message) => toastType(message, {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
    });

    return (
        <div className='container'>
            <Formik
                initialValues={{
                    name: [{
                        myguy: '',
                    }],
                }}

                validationSchema={Yup.object({
                    name: Yup.array().of(
                        Yup.object().shape({
                            name: Yup.string().required('Required'),
                        })
                    )
                    // name: Yup.string().required('Required'),

                    // phoneNumber: Yup.string().matches(
                    //     /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                    //     "Not valid").required('Required'),

                    // address: Yup.string().required('Required'),
                })}

                onSubmit={(values, { resetForm }) => {
             
                    // console.log(values)

                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values)
                    };
                    fetch('Client/registerclient', requestOptions)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(response.status);
                                //navigate to Login screen
                            }
                            return response.json();
                        })
                        .then(data => {
                            if (!data.success) {
                                // console.log(data.message)
                            }
                            notify(toast.success, "Client Created Successfully")
                            // console.log(data)
                        })
                        .catch((error) => {
                            // console.log(error.message);
                            notify(toast.error, "Error Creating Client")
                            //if (error.message === 401) {
                            //    console.log("Not Authorized")
                            //} else if (error.message == 404) {
                            //    console.log("Not Found")
                            //}
                        });
                    resetForm({ values: '' })
                }}
            >

                {formik => (
                    <Form >
                        <div className='row'>
                            <div className="col-6">
                                <label htmlFor="name" className="mt-3"> Name {formik.touched.name && formik.errors.name ? <span className="text-danger">({formik.errors.name})</span> : null} </label>
                                <Field className="form-control"  name="name.myguy" type="text" />
                            </div>

                            {/* <div className="col-6">
                                <label htmlFor="phoneNumber" className="mt-3"> Phone {formik.touched.phoneNumber && formik.errors.phoneNumber ? <span className="text-danger">({formik.errors.phoneNumber})</span> : null} </label>
                                <Field className="form-control"  name="phoneNumber" type="text" />
                            </div> */}
                        </div>

{/* 
                        <label htmlFor="address" className="mt-3">Address {formik.touched.address && formik.errors.address ? <span className="text-danger">({formik.errors.address})</span> : null} </label>
                        <Field className="form-control"  name="address" type="text" /> */}


                        <button className="btn btn-primary mt-3" type="submit">Add Client</button>
                    </Form>

                )}

            </Formik>
        </div>

    )
}

export default Trabaye