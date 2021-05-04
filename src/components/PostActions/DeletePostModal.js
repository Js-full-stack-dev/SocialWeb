import React from 'react';
import { deletePost } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const DeletePostModal = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts)

    return (
        <div>
             {/* <div className="modal fade delete-post-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>Delete post</h2>
                  </div>
                </div>
                <div className="inner-content">
                  <p>Are you sure you want to delete the post?</p>
                  <div className="text-center">
                    <button  type="button" className="gd-btn" data-dismiss="modal" aria-label="Close" onClick={() => dispatch(deletePost(post._id))}>delete</button>
                    <button type="button" className="nbg-btn" data-dismiss="modal" aria-label="Close">cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
    )
}

export default DeletePostModal
