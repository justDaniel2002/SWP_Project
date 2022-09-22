import React,{useState,useEffect} from "react";
import axios from "axios"


function useFetch(url){
    const [userInfos , setUserInfos] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then(res => {
                setUserInfos(res.data)
            })
            .catch(err =>{
                setError(err)
                console.log(err)
            })
            .finally(()=>{
                setLoading(false);
            })
    },[])

    return {userInfos ,loading , error}

}
    export default useFetch;