import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const EditSession = () => {
    const [Session, setSession] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/client/classes/sessions", {id})
        .then(res=>{
            console.log(res)

        })
        .catch(err=>{
            console.log(err)
        })

    }, [])
    return (
        <>
            <h1>Edit Session</h1>
            

        </>
    )
}
export default EditSession;