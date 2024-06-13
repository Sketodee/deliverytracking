import React from 'react'
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

const getOrder = async () => {
    axios
      .get(`${baseURL}/order/getorders`, {})
      .then((res) => {
            // console.log(res)
      })
      .catch((error) => {
        console.error(error);
      });
  };


const apiPolling = () => {
  getOrder()
  setInterval(getOrder, 1800000); 
}

export default apiPolling