import React from "react"
import useFetch from "../api/useFetch.js";
function HomaPage(){
    //data state
    const URL = "http://localhost:5000";
    const {userInfos , loading , error } = useFetch(`${URL}/user_manager`);
    if(loading) return <h1>Loading ... </h1>
    if(error) return <h2>{error}</h2> 
    console.log("userInfos : " , userInfos)
    return(
        <div>
            <table>
                <tr>
                    <th>User name</th>
                    <th>User bitth</th>
                    <th>Gmail</th>
                    <th>Contact</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {userInfos.map(data => (
                    <tr key={data._id}>
                        <td>{data.userName ? data.userName : "null"}</td>
                        <td>{data.userBirth ? data.userBirth : "null"}</td>
                        <td>{data.email ? data.email : "null"}</td>
                        <id>{data.phone ? data.phone : "null"}</id>
                        <id><a href="#">Update</a></id>
                        <id><a href="#">Delete</a></id>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default HomaPage