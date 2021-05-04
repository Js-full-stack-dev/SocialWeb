import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const IntroLeft = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
   
       
          <div className="intro box">
            <h2>Intro</h2>
            <ul>
              <li>
                <div className="media"> <i className="fa fa-graduation-cap"></i>
                  <div className="media-body">
                  <p>{user.result.educationInstitute || user.educationInstitute}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="media"> <i className="fa fa-graduation-cap"></i>
                  <div className="media-body">
                  <p>{user.result.educationLevel || user.educationLevel}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="media"> <i className="fa fa-graduation-cap"></i>
                  <div className="media-body">
                  <p>{user.result.educationDisiplane || user.educationDisiplane}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="media"> <i className="fa fa-briefcase"></i>
                  <div className="media-body">
                  <p>{user.result.workCompany || user.workCompany} </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="media"> <i className="fa fa-briefcase"></i>
                  <div className="media-body">
                  <p>{user.result.workDesignation || user.workDesignation}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">  <i classNameName="fa fa-heart" />
                  <div className="media-body">
                  <p>{user.result.realtionshipStatus || user.realtionshipStatus}</p>
                  </div>
                </div>
              </li>
            <li>
            <div className="media"> <i className="fa fa-clock" />
              <div className="media-body">
                <p>{user.result.dob || user.dob}</p>
              </div>
            </div>
            </li>
            

              <li> <Link to="/myaccount" class="pink">show more</Link> </li>
              {/* <li> <Link to="/myaccountintro" class="pink">show more</Link> </li> */}
            </ul>
          </div>
      
  
    )
}

export default IntroLeft
