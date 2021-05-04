import React from 'react'

const SignupSuccessModal = () => {
    return (
<div className="modal fade signup-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 text-center"> <img src="images/signup.png" className="img-fluid" alt="" />
                    <p>You have successfully signed up !</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SignupSuccessModal
