import React,{useState} from 'react';
import { Link } from 'react-router-dom'


const Intro = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
      <div className="intro-info box">
      <div className="top">
        <h2>Description:</h2>
        <p>{user.result.description || user.description}</p>
      </div>
      <div className="bottom">
        <h2>Intro:</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="media"> <i className="fa fa-graduation-cap" />
              <div className="media-body">
                <p>{user.result.educationInstitute || user.educationInstitute}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="media"> <i className="fa fa-briefcase" />
              <div className="media-body">
                <p>{user.result.workCompany || user.workCompany} </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="media"> <i className="fa fa-graduation-cap" />
              <div className="media-body">
                <p>{user.result.educationLevel || user.educationLevel}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="media"> <i className="fa fa-briefcase" />
              <div className="media-body">
                <p>{user.result.workDesignation || user.workDesignation}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="media"> <i className="fa fa-graduation-cap" />
              <div className="media-body">
                <p>{user.result.educationDisiplane || user.educationDisiplane}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="media"> <i className="fa fa-heart" />
              <div className="media-body">
                <p>{user.result.realtionshipStatus || user.realtionshipStatus}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="media"> <i className="fa fa-address-card" />
              <div className="media-body">
                <p>{user.result.address || user.address}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="media"> <i className="fa fa-map-marker-alt" />
              <div className="media-body">
                <p>{user.result.location || user.location}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="media"> <i className="fa fa-clock" />
              <div className="media-body">
                <p>{user.result.dob || user.dob}</p>
              </div>
            </div>
          </div>
          <Link to="/editmyaccountintro" className="gd-btn">edit</Link> 
          </div>
      </div>
    </div>
          
          // add or delete multiple 
            // educationInstitute  
            // educationLevel  
            // educationDisiplane  
            // workDesignation  
            // workCompany 
             
            

    )
}

export default Intro
