import React from 'react'

const PostReported = () => {
    return (
        <div>
         <div className="modal fade report-modal-2 common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>Report user</h2>
                  </div>
                </div>
                <div className="inner-content">
                  <p>Post reported successfully</p>
                  <div className="text-center">
                    <button type="button" className="gd-btn" data-dismiss="modal" aria-label="Close">ok</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
        </div>
    )
}

export default PostReported
