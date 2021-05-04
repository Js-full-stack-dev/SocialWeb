import axios from 'axios';
import React, {useEffect,useState} from 'react';
import api from "../api/apis";

const Active = () => {
  const [Data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/user/users")
    .then(res=>{
      const response=res.data;
      setData(response)
    })
},[])


  return (

       <div className="active-box box" >
                  <h2>Active</h2>
                  <div className="scroll-bar">
        {
          Data.map((data) =>
                    <div className="media align-items-center" key={data._id}>
                      <div className="profile-with-active position-relative" > 
                      <img src={ data.profilePhoto ? data.profilePhoto : "images/avatar.png"} className="img-fluid" alt="" /> 
                      <span className="green-bg" /> 
                      </div>
                      <div className="media-body">
                    <h4>{data.name}</h4>
                      </div>
                    </div>
        )}
                  </div>

                </div>      
     
    )
}

export default Active
