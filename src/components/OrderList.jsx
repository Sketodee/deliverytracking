import {useState, useEffect } from 'react'
import axios from 'axios'

const OrderList = () => {

    const [items, setItems] = useState([])

    console.log(items)
    useEffect(() => {
        axios.get("https://localhost:7248/api/Order/getallorders", {
        })
            .then((res) => {
                var data = res.data
                setItems(data.data);
                console.log(items)
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
                </tr>
            </thead>
            <tbody>
                {items.length> 0 ? items.map((item, index) =>
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.orderId}</td>
                        <td>{item.trackingId}</td>
                        <td>{item.status}</td>
                    </tr>
                ) : <td className = "py-3"> No Order yet </td>}
            </tbody>
        </table>
        </div>
       
     )
}

export default OrderList