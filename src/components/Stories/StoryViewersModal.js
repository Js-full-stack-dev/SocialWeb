import React from 'react'

const StoryViewersModal = () => {
    return (
        <div>
              <div className="modal fade story-viewer common-modal" id="story-viewer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                    <h2>List of Viewers</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
                  </div>
                </div>
                <div className="inner-content">
                  <div className="scroll-bar">
                    <ul>
                      <li> <a href="friend-request-profile.html">
                          <div className="media"> <img src="images/user-3.png" alt="" />
                            <div className="media-body">
                              <h3>Foster Social</h3>
                            </div>
                          </div>
                        </a> </li>
                      <li> <a href="friend-request-profile.html">
                          <div className="media"> <img src="images/user-3.png" alt="" />
                            <div className="media-body">
                              <h3>Foster Social</h3>
                            </div>
                          </div>
                        </a> </li>
                      <li> <a href="friend-request-profile.html">
                          <div className="media"> <img src="images/user-3.png" alt="" />
                            <div className="media-body">
                              <h3>Foster Social</h3>
                            </div>
                          </div>
                        </a> </li>
                      <li> <a href="friend-request-profile.html">
                          <div className="media"> <img src="images/user-3.png" alt="" />
                            <div className="media-body">
                              <h3>Foster Social</h3>
                            </div>
                          </div>
                        </a> </li>
                      <li> <a href="friend-request-profile.html">
                          <div className="media"> <img src="images" alt="" />
                            <div className="media-body">
                              <h3>Foster Social</h3>
                            </div>
                          </div>
                        </a> </li>
                      <li> <a href="friend-request-profile.html">
                          <div className="media"> <img src="images" alt="" />
                            <div className="media-body">
                              <h3>Foster Social</h3>
                            </div>
                          </div>
                        </a> </li>
                      <li> <a href="friend-request-profile.html">
                          <div className="media"> <img src="" alt="" />
                            <div className="media-body">
                              <h3>Foster Social</h3>
                            </div>
                          </div>
                        </a> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default StoryViewersModal
