import React from 'react'

const AddStoriesModal = () => {
    return (
        <div>
         <div className="modal fade-in story-modal-common add-story-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 col-lg-4 col-xl-3">
                    <div className="left">
                      <div className="top">
                        <ul>
                          <li>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
                          </li>
                          <li> <a href="home.html"><img src="images/logo.png" className="img-fluid" alt="" /></a> </li>
                        </ul>
                      </div>
                      <div className="bottom">
                        <h2>Subscribed Channels</h2>
                        <ul>
                          <li>
                            <div className="media">
                              <div className="story-img"><img src="images/user.png" className="img-fluid" alt="" /></div>
                              <div className="media-body">
                                <h3>Foster Social</h3>
                                <h6>2 Hrs Ago</h6>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8 col-xl-9">
                    <div className="right">
                      <form action>
                        <div className="add-stroy-right-2">
                          <div className="d-flex justify-content-between top">
                            <div className="media"> <img src="images/user.png" alt="" className="img-fluid" />
                              <div className="media-body">
                                <h4>Foster Social</h4>
                              </div>
                            </div>
                            <button type="button"><i className="fa fa-times" /></button>
                          </div>
                          <div className="bottom">
                            <ul>
                              <li><img src="images/ad-img.png" className="img-fluid" alt="" /></li>
                              <li>
                                <video poster="images/video.png" controls className>
                                  <source src="video/mov_bbb.mp4" type="video/mp4" />
                                </video>
                              </li>
                              <li><img src="images/ad-img.png" className="img-fluid" alt="" /></li>
                              <li>
                                <video poster="images/video.png" controls className>
                                  <source src="video/mov_bbb.mp4" type="video/mp4" />
                                </video>
                              </li>
                            </ul>
                            <button type="submit" className="gd-btn">upload</button>
                          </div>
                        </div>
                      </form>
                      {/*
              <form action="">
				  <label for="upload-pic-vid">
					  <span class="">
				  	<img src="images/upload.png" class="img-fluid" alt="">
					  <p>Upload Photo/Video</p>
					  <input type="file" id="upload-pic-vid" class="d-none">
						  </span>
				  </label>
				  <label for="open-camera">
					  <span class="">
				  	<img src="images/open-camera.png" class="img-fluid" alt="">
					  <p>open camera</p>
					  <input type="file" id="open-camera" class="d-none">
						  </span>
				  </label>
              </form>
*/} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
        </div>
    )
}

export default AddStoriesModal
