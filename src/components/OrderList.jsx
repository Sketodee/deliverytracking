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

  const [inputValues, setInputValues] = useState([]);

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleChange = (index, fieldName, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = {
      ...updatedValues[index],
      [fieldName]: value,
    };
    setInputValues(updatedValues);
  };

  const handleSelectChange = (index, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = {
      ...updatedValues[index],
      status: value,
    };
    setInputValues(updatedValues);
  };

  const handleDelete = async (rowIndex) => {
    setIsLoading(true);

    fetch(`${baseURL}/order/deleteorderbytrackingid?trackingId=${rowIndex}`)
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
        notify(toast.error, "Error Deleting Order");
      });
    setModalClose(true);
    setIsLoading(false);
  };

  const handleSubmit = (rowIndex, item) => {
    setIsLoading(true);
    setSelectedRowIndex(rowIndex);

    const requestbody = {
      ...inputValues[rowIndex],
      status: inputValues[rowIndex]?.status || item.status, // if the order status is not updated.. it auto updates
      currentLocation:
        inputValues[rowIndex]?.currentLocation || item.currentLocation,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestbody),
    };

    fetch(
      `${baseURL}/order/updateorderstatus?orderId=${item.orderId}`,
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
    setInputValues("");
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
              <th> Tracking ID </th>
              <th> Status </th>
              <th> Location</th>
              <th>Update Status</th>
              <th>Update Location</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.trackingId}</td>
                <td>{item.status}</td>
                <td>{item.currentLocation}</td>
                <td>
                  <select
                    name="status"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    value={inputValues[index]?.status || item.status}
                    onChange={(e) => handleSelectChange(index, e.target.value)}
                  >
                    {/* <option selected> {item.status} </option> */}
                    <option value="Order Confirmed">Order Confirmed</option>
                    <option value="Picked By Courier">Picked by Courier</option>
                    <option value="On The Way">On The Way</option>
                    <option value="Ready For Pickup">Ready For Pickup</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    name="currentLocation"
                    className="form-control-sm form-control"
                    value={inputValues[index]?.currentLocation || ""}
                    onChange={(e) =>
                      handleChange(index, "currentLocation", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button
                    // disabled={
                    //   !inputValues[index]?.currentLocation ||
                    //   !inputValues[index]?.currentLocation
                    // }
                    className="btn btn-success"
                    onClick={() => handleSubmit(index, item)}
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
