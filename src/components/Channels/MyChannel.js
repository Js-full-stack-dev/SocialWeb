import React,{useState} from 'react';

const MyChannel = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <div>
           <div className="subscribe-channel my-channel box">
                  <h2>My Channel</h2>
                  <a href="my-channel.html">
                    <div className="media align-items-center"> <img src={user.result.profilePhoto} className="img-fluid" alt="" />
                      <div className="media-body">
                        <h4>{user.result.name} 's channel</h4>
                      </div>
                    </div>
                  </a>
                  <div className="text-right"> <a href="https://www.youtube.com/" className="view-all">view </a> </div>
                </div>      
        </div>
    )
}

export default MyChannel
