import React from 'react'

const SharePostModal = () => {
    return (
        <div className="modal fade share-post common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
          <div className="modal-body">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Share Post</h2>
              </div>
            </div>
            <form action>
              <div className="row">
                <div className="col-12 text-center"> <img src="images/share.png" className="img-fluid" alt="" />
                  <h3>Are you sure you want to <br />
                    share the post?</h3>
                  <div className="d-sm-flex justify-content-between align-items-center">
                    <button type="button" className="gd-btn" data-dismiss="modal" aria-label="Close">Yes</button>
                    <button type="button" className="nbg-btn" data-dismiss="modal" aria-label="Close">no</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
}

export default SharePostModal
