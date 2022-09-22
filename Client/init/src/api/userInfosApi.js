import axios from "axios"

const URL = "http://localhost:5000";

export const fetchUserInfos = async () => {
    axios.get(`${URL}/user_manager`)
    .then(res => {
        console.log(res.data)
        return res.data;
    })
    .catch(err =>{
        console.log(err)
    })
}