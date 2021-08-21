import React, { useState } from "react";
const CreateClass=()=>{
    const defaultState = {
        name: "",
        type: "",
        start_time: "",
        duration: "",
        intensity: "",
        location: "",
        max_class: ""
    }

    const [createClass,setCreateClass]=useState(defaultState)
    return(
        <>
        <h2>Create Class </h2>
        </>

    )
}
export default CreateClass;