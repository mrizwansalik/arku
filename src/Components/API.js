import axios from 'axios'
import { useEffect } from 'react'

export default function API() {
const API = "https://jsonplaceholder.typicode.com/"
const user = {id:"11",name:"Rizwan", phone:"0000044444",username:"Rizwan",website:"airbook.aero",address:{}, company:{}}

    useEffect(() => {
        getData();
        postData()
    })

    const getData = () => {
        axios
          .get(`${API}users`)
          .then((res) => {
            console.log("getting data from fake api", res.data);
          })
          .catch((err) => {
            console.log("user getting data error", err);
          });
    }

    const postData = async () => {
        await axios
          .post(`${API}users`,user)
          .then((res) => {
            console.log("posting data from fake api", res);
          })
          .catch((err) => {
            console.log("user posting data error", err);
          });
    }

    return (
        null
    )
}
