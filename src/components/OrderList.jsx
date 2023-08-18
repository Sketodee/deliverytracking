import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderList = () => {
  const notify = (toastType, message) =>
    toastType(message, {
      position: "top-center",
      theme: "colored",
      autoClose: 2000,
    });

  const baseURL = process.env.REACT_APP_BASE_URL;

  const [name, setName] = useState("Seun");

  const [modalClose, setModalClose] = useState(false);

  const [refreshCount, setRefreshCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [items, setItems] = useState([]);

  const [newStatus, setNewStatus] = useState("");

  const handleChange = (event, rowIndex) => {
    const selectedValue = event.target.value;
    setNewStatus(selectedValue);
  };

  const handleDelete = async (rowIndex) => {
    setIsLoading(true);

    fetch(
      `http://localhost:3900/api/order/deleteorderbytrackingid?trackingId=${rowIndex}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        // Refresh component after successful POST
        setRefreshCount(refreshCount + 1);
        notify(toast.success, "Order Deleted Successfully");
        return response.json();
      })
      .catch((error) => {
        notify(toast.error, "Error Updating Order");
      });
    setModalClose(true);
    setIsLoading(false);
  };

  const handleSubmit = (rowIndex) => {
    // console.log(`Selected value for row ${rowIndex}: ${newStatus}`);
    setIsLoading(true);

    const requestbody = {
      status: newStatus,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestbody),
    };

    fetch(
      `http://localhost:3900/api/order/updateorderstatus?orderId=${rowIndex}`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        // Refresh component after successful POST
        setRefreshCount(refreshCount + 1);
        notify(toast.success, "Order Updated Successfully");
        return response.json();
      })
      .catch((error) => {
        notify(toast.error, "Error Updating Order");
      });

    setIsLoading(false);
    setNewStatus("");
  };

  const getOrder = async () => {
    setIsLoading(true);
    axios
      .get(`${baseURL}/order/getorders`, {})
      .then((res) => {
        var data = res.data;
        setItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    if (refreshCount >= 0) {
      getOrder();
    }
  }, [refreshCount]);

  return (
    <div className="table-responsive">
      <h3> Order List </h3>
      {items.length > 0 ? (
        <table className="table table-striped" aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Order ID </th>
              <th> Tracking ID </th>
              <th> Status </th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.orderId}</td>
                <td>{item.trackingId}</td>
                <td>{item.status}</td>
                <td>
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    onChange={(event) => handleChange(event, item.orderId)}
                  >
                    {/* <option selected> {item.status} </option> */}
                    <option value="Order Confirmed">Order Confirmed</option>
                    <option value="Picked By Courier">Picked by Courier</option>
                    <option value="On The Way">On The Way</option>
                    <option value="Ready For Pickup">Ready For Pickup</option>
                  </select>
                </td>
                <td>
                  <button
                    disabled={newStatus.length === 0}
                    className="btn btn-success"
                    onClick={() => handleSubmit(item.orderId)}
                  >
                    Update{" "}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setName(item.trackingId)}
                  >
                    <span className="icon">
                      {" "}
                      <i className="fa fa-trash"></i>{" "}
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="text-center"> No orders yet </h4>
      )}

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete order {name} ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => handleDelete(name)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
