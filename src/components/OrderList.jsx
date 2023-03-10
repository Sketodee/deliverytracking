import { useState, useEffect } from 'react'
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderList = () => {

    const notify = (toastType, message) => toastType(message, {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
    });

    const [items, setItems] = useState([])

    const [newStatus, setNewStatus] = useState("")

   const  handleChange = (event, rowIndex) => {
        const selectedValue = event.target.value;
        setNewStatus(selectedValue)
        // console.log(`Selected value for row ${rowIndex}: ${selectedValue}`);
      };

      const  handleSubmit = ( rowIndex) => {
        // console.log(`Selected value for row ${rowIndex}: ${newStatus}`);

        const requestbody = {
            status: newStatus
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestbody)
        };

        fetch(`https://localhost:7248/api/Order/updateorderstatus?query=${rowIndex}`, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                if (!data.success) {
                    // console.log(data.message)
                }
                notify(toast.success, "Order Updated Successfully")
            })
            .catch((error) => {
                // console.log(error.message);
                notify(toast.error, "Error Updating Order")
                //if (error.message === 401) {
                //    console.log("Not Authorized")
                //} else if (error.message == 404) {
                //    console.log("Not Found")
                //}
            });

        setNewStatus("")
      };


    useEffect(() => {
        axios.get("https://localhost:7248/api/Order/getallorders", {
        })
            .then((res) => {
                var data = res.data
                setItems(data.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h3> Order List </h3>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Order ID </th>
                        <th> Tracking ID  </th>
                        <th> Status </th>
                        <th>Update Status</th>

                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? items.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.orderId}</td>
                            <td>{item.trackingId}</td>
                            <td>{item.status}</td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example"  onChange={(event) => handleChange(event, item.trackingId)}>
                                    <option selected > {item.status} </option>
                                <option value="Order confirmed">Order Confirmed </option>
                                <option value="Picked by courier">Picked by Courier</option>
                                <option value="On the way"> On the way </option>
                                <option value="Ready for pickup">Ready for pickup</option>
                                </select>
                            </td>
                            <td><button disabled = {newStatus.length === 0 } btn btn-success onClick={() => handleSubmit( item.trackingId)}>Update </button></td>
                        </tr>
                    ) : <td className="py-3"> No Order yet </td>}
                </tbody>
            </table>
        </div>

    )
}

export default OrderList