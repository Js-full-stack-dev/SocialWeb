import React from 'react';

const url = 'http://localhost:5000';

const CreatePostModal = () => {
    return (
        
                    <div>
            <div className="modal fade status-pick post-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>Upload Image</h2>
                  </div>
                </div>
                <div className="inner-content">
                  <form onSubmit={handleSubmitCreatePost}>
                    <div className="row">
                      <div className="col-12">
                        <div className="media"> <img src="images/pro-img.png" className="img-fluid" alt="" />
                          <div className="media-body">
                            <h3>user name</h3>
                            <h6>Posted at 
                            {/* {moment(post.createdAt).fromNow()} */}
                            {/* {moment().format("MM ddd, YYYY hh:mm:ss a")} */}
                            </h6>
                            <select className="fa" onChange={handleChange} name="visibility">
                              <option className="fa" value selected> public </option>
                              <option className="fa" value> friends</option>
                              <option className="fa" value> only me</option>
                            </select>
                            <textarea  onChange={handleChange} name="postMessage" name id cols rows className="form-control" placeholder="what's on your mind?" defaultValue={""} />
                          </div>
                        </div>

                        <div className="status-img"> <img src="images/news-img.png" className="img-fluid" alt="" />
                          <button type="button" className="del-btn"><i className="fa fa-times" /></button>
                        </div>
                        <div className="status-img">
                          <video poster="images/video.png" controls className>
                            <source src="video/mov_bbb.mp4" type="video/mp4" />
                          </video>
                          <button type="button" className="del-btn"><i className="fa fa-times" /></button>
                        </div>
                        
                        
                        <div className="multi-images">
                          <ul>
                            <li>
                              <label className="multi-img-check"><img src="images/news-img.png" className="img-fluid" alt="" />
                                <input type="checkbox" defaultChecked="checked" />
                                <span className="checkmark" /></label>
                            </li>
                            <li>
                              <label className="multi-img-check">
                                <video poster="images/video.png" controls className>
                                  <source src="video/mov_bbb.mp4" type="video/mp4" />
                                </video>
                                <input type="checkbox" />
                                <span className="checkmark" />
                              </label>
                            </li>                        
                          </ul>
                        </div>


                        <button type="submit" className="gd-btn form-control" data-dismiss="modal" aria-label="Close">Post / upload</button>
                      
                      </div>
                    </div>
                  </form>
                </div>
              </div>
             </div>
           </div>
         </div>
         </div>
        
    )
}

export default CreatePostModal
