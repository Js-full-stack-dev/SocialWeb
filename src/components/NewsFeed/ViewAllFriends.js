import React from 'react';

const ViewAllFriends = () => {
    return (
        <div>
                  <div className="friend-list">
                        <div className="box">
                          <div className="row">
                            <div className="col-12 col-lg-6">
                             <a href="friend-request-profile.html">
                                <form action>
                                  <div className="media"> <img src="images/user-2.png" className="img-fluid" alt="" />
                                    <div className="media-body">
                                      <h2>Foster Social</h2>
                                      <h6>12 Mutual Friends</h6>
                                    </div>
                                    <button type="button" className="gd-btn">friends</button>
                                  </div>
                                </form>
                              </a> 
                              </div>
                     
            
                       
                          </div>
                        </div>
                      </div>
        </div>
    )
}

export default ViewAllFriends
