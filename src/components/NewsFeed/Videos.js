import React from 'react'

const Videos = () => {
    return (
        <div>
       <div className="friend-video">
                        <div className="box">
                          <div className="row">
                            <div className="col-12">
                              <h2>youtube</h2>
                              <div className="d-flex justify-content-between subs-channel-bar">
                                <div className>
                                  <div className="media align-items-center"> <img src="images/channel.png" className="img-fluid" alt="" />
                                    <div className="media-body">
                                      <h3>Foster Social</h3>
                                      <h4>35k Subscriber</h4>
                                    </div>
                                  </div>
                                </div>
                                <div className>
                                  <button type="button" className="red-btn">Subscribe</button>
                                </div>
                              </div>
                              <ul id="friend-video">
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                                <li data-toggle="modal" data-target=".friend-video-modal"> <img src="images/video.png" className="img-fluid" alt="" /> </li>
                              </ul>
                              <button type="button" id="show-more-video">show more</button>
                              <button type="button" style={{display: 'none'}} id="show-less-video">show less</button>
                            </div>
                          </div>
                        </div>
                      </div>            
        </div>
    )
}

export default Videos
