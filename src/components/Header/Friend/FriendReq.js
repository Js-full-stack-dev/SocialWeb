import React from 'react';
import { Link } from "react-router-dom";

const FriendReq = () => {
    return (
        <div className="dropdown-menu frnd-req-menu">
        <h2>Friend Request</h2>
        <form action>
          <div className="frnd-req">
            <ul>
             
            
              <li> <a href="friend-request-profile.html">
                  <div className="media"> <img src="images/user.png" className="img-fluid" alt="" />
                    <div className="media-body">
                      <h3>Foster Social</h3>
                      <p>2 Hrs Ago</p>
                    </div>
                    <button type="button" className="gd-btn">confirm</button>
                    <button type="button" className="nbg-btn">ignore</button>
                  </div>
                </a> </li>
              <li> <a href="friend-request-profile.html">
                  <div className="media"> <img src="images/user.png" className="img-fluid" alt="" />
                    <div className="media-body">
                      <h3>Foster Social</h3>
                      <p>2 Hrs Ago</p>
                    </div>
                    <button type="button" className="gd-btn">confirm</button>
                    <button type="button" className="nbg-btn">ignore</button>
                  </div>
                </a> 
                </li>
            </ul>
          </div>
        </form>
        <ul>
          <li className="dropdown-menu-footer">
          {/* <a className="dropdown-item text-right" href="/friendrequest">view all</a> */}

<Link to="/friendrequest" className="dropdown-item text-right">view all</Link>
          </li>
        </ul>
      </div>
    )
}

export default FriendReq
