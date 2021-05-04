import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost, updatePost } from "../actions/posts";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
// import PrivacyModal from './PostActions/PrivacyModal';
import * as api from "../api/apis";
import LikeShareInfoModal from "./PostActions/LikeShareInfoModal";

const NewsFeeds = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const posts = useSelector((state) => state.posts);
  const [PostData, setPostData] = useState([]);

  // const [postData, setpostData] = useState({
  //   comments :""
  // });

  const [showCommentBox, setShowCommentBox] = useState(false);

  const [commentState, setCommentState] = useState({});

  const [currentPost, setCurrentPost] = useState("");

  const [currentPostCommentState, setCurrentPostCommentState] = useState([]);

  const Likes = (post) => {
    {
      post.map((item) => {
        if (item.likes?.length > 0) {
          return item.likes.find((like) => like === user?.result?._id) ? (
            <>
              <i color="primary" className="fa fa-thumbs-up" />
              &nbsp;
              {item.likes.length > 2
                ? `You and ${item.likes.length - 1} others`
                : `${item.likes.length} like${
                    item.likes.length > 1 ? "s" : ""
                  }`}
            </>
          ) : (
            <>
              <i className="fa fa-thumbs-up" />
              &nbsp;{item.likes.length}{" "}
              {item.likes.length === 1 ? "Like" : "Likes"}
            </>
          );
        }

        return (
          <>
            <i className="fa fa-thumbs-up" />
            &nbsp;Like
          </>
        );
      });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((post) => {
      const postDataResponse = post.data;
      setPostData(postDataResponse);
    });
  }, [post]);

  const handleCommentSubmit = (e, { post }) => {
    e.preventDefault();

    api.comment(post._id, commentState);

    console.log(`comment state `, post._id, commentState);
    console.log(e.target.name);
  };

  const handleCommentChange = (e) => {
    setCommentState({ ...commentState, [e.target.name]: e.target.value });

    console.log(e.target.name);
  };

  // const callingComment = () => {
  //   // setShowCommentBox(true)
  //   // console.log(`comment  box called`)
  //   if (showCommentBox == false) {
  //     setShowCommentBox(true);
  //   } else {
  //     setShowCommentBox(false);
  //   }
  // };

  // const addComment =  (e, { postid }) => {
  //   e.preventDefault();
  //   // axios.patch(`http://localhost:5000/posts/comment/${postid}`)
  //    api.comment(postid, commentState )
  //   console.log(`commentState`, postid, commentState);
  // };

  // const CommentAddChange = (e) => {
  //   // e.preventDefault();
  //   setCommentState({ comment: e.target.value });
  //   console.log(`commentState`, commentState );
  // };

  // const CommentBox = ({ postid }) => {
  //   return <div></div>;
  // };
  // const privacyModal = () => {
  //  <PrivacyModal />
  // }
  // let postsId = ""
  // const handlePrivacy = (e) => {
  //   const radioValue = e.target.value ;
  //   console.log(`privacy is on :`, radioValue);
  //   // dispatch(updatePost(currentId, {...postData , name: user?.result?.name }));
  //   // api.updatePost(,radioValue)
  //     //  console.log(`post.id`, postsId)
  // }

  return (
    <div>
      {PostData.map((post) => (
        <div className="newsfeed box" key={post._id}>
          {/* {  api.updatePost(post._id,e.target.value)} */}
          <div className="newsfeed-top">
            <div className="media">
              <div className="profile-with-active position-relative">
                {" "}
                <img
                  src={
                    post.profilePhoto ? post.profilePhoto : "images/avatar.png"
                  }
                  className="img-fluid"
                  alt=""
                />{" "}
                <span className="green-bg" />{" "}
              </div>
              <div className="media-body">
                <div className="d-flex justify-content-between">
                  <h3>
                    {/* {post?.creator} */}
                    {post?.name}
                    <br />
                    Post id : {post._id}
                    <br />
                    User id : {post.creator}
                  </h3>
                  {post.creator == user.result._id ? (
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="fa fa-ellipsis-h" />{" "}
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          className="dropdown-item"
                          onClick={() => setCurrentPost(post)}
                          href="#"
                          data-toggle="modal"
                          data-target=".privacy-modal"
                          //  onClick={privacyModal}
                        >
                          privacy setting
                        </a>{" "}
                        {/* {post._id} */}
                        {/* <a className="dropdown-item"  
                        // onClick={() => 
                        // setCurrentPost(post._id)
                        // dispatch(updatePost(post._id))
                        // }
                        onChange={() => {
                                      api.updatePost(currentPost._id, {
                                        postMessage: "",
                                        selectedFile:""
                                      });
                                    }}
                        
                        >edit post</a>  */}
                        <a
                          className="dropdown-item"
                          // href="#" data-toggle="modal" data-target=".delete-post-modal"
                          onClick={() => dispatch(deletePost(post._id))}
                        >
                          delete
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="fa fa-ellipsis-h" />{" "}
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        {" "}
                        <a
                          className="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target=".report-post-modal"
                        >
                          report post
                        </a>{" "}
                      </div>
                    </div>
                  )}
                </div>
                <h6>Posted at {moment(post?.createdAt).fromNow()}</h6>

                <h5>
                  {post.visibility == "onlyme" ? (
                    <i className="fa fa-lock" />
                  ) : post.visibility == "friends" ? (
                    <i className="fa fa-users" />
                  ) : (
                    <i className="fa fa-globe-africa" />
                  )}
                </h5>

                <div
                  className="modal fade privacy-modal common-modal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  {/* <privacyModal /> */}
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        {" "}
                        <span className="fa fa-times" aria-hidden="true">
                          {" "}
                        </span>
                      </button>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-12 text-center">
                            <h2>Privacy Setting</h2>
                          </div>
                        </div>
                        <div className="inner-content">
                          <form>
                            <div className="row">
                              <div className="col-12">
                                <h4>Who can see your post?</h4>
                                {/* {currentPost._id} */}
                                <label className="privacy-radio">
                                  <div className="media align-items-center">
                                    {" "}
                                    <i className="fa fa-globe-africa" />
                                    <div className="media-body">
                                      <h5>Public</h5>
                                      <br />
                                      <h6>Anyone on or off Social Stash</h6>
                                    </div>
                                  </div>
                                  <input
                                    type="radio"
                                    name="radio"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onChange={() => {
                                      api.updatePost(currentPost._id, {
                                        visibility: "public",
                                      });
                                      // console.log("public", currentPost._id);
                                    }}
                                    value="public"
                                  />
                                  <span className="checkmark" />
                                </label>

                                <label className="privacy-radio">
                                  <div className="media align-items-center">
                                    {" "}
                                    <i className="fa fa-users" />
                                    <div className="media-body">
                                      <h5>Friends</h5>
                                      <br />
                                      <h6>Your friends on social stash</h6>
                                    </div>
                                  </div>
                                  <input
                                    type="radio"
                                    name="radio"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onChange={() => {
                                      api.updatePost(currentPost._id, {
                                        visibility: "friends",
                                      });
                                      // console.log("friends", currentPost._id);
                                    }}
                                    value="friends"
                                  />
                                  <span className="checkmark" />
                                </label>

                                <label className="privacy-radio">
                                  <div className="media align-items-center">
                                    {" "}
                                    <i className="fa fa-lock" />
                                    <div className="media-body">
                                      <h5>Only me</h5>
                                      <br />
                                      <h6>Only me</h6>
                                    </div>
                                  </div>
                                  <input
                                    type="radio"
                                    name="radio"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onChange={() => {
                                      api.updatePost(currentPost._id, {
                                        visibility: "onlyme",
                                      });
                                      // console.log("only me", currentPost._id);
                                    }}
                                    value="onlyme"
                                  />
                                  <span className="checkmark" />
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="newsfeed-center">
                  <p>{post?.postMessage}</p>
                  {post.selectedFile && (
                    <img
                      src={post?.selectedFile}
                      className="img-fluid"
                      alt="NewsFeed Image"
                    />
                  )}

                  <form>
                    <div className="likes-and-shares-info d-flex justify-content-between">
                      {/* <a  onClick={() => setCurrentPost(post)}> */}
                      <div>
                        <ul
                          className="left"
                          data-toggle="modal"
                          data-target=".like-and-share-modal"
                        >
                          <a
                            onClick={() => setCurrentPostCommentState(post._id)}
                          >
                            <li>
                              <button type="button">
                                <i className="fa fa-thumbs-up" />
                              </button>
                            </li>
                            <li>
                              <button type="button">
                                <i className="fa fa-heart" />
                              </button>
                            </li>
                            <li>
                              <button type="button">
                                <i className="fa fa-smile" />
                              </button>
                            </li>
                          </a>
                        </ul>
                        <h6>{post.likes.length}</h6>
                        {/* <div className="modal fade like-and-share-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"> */}
                        {/* <LikeShareInfoModal /> */}
                        {/* </div> */}
                      </div>
                      {/* </a> */}
                      {/* llll */}

                      <div>
                        <ul className="right">
                          <li>
                            <button type="button">
                              <i className="fa fa-comment-dots" />{" "}
                              {post.comments.length}{" "}
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              data-toggle="modal"
                              data-target=".like-and-share-modal"
                            >
                              <i className="fa fa-share" /> {post.shares.length}{" "}
                              share
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>

                  <div className="like-share-comment-bar d-flex justify-content-around align-items-center">
                    <button
                      color="primary"
                      // disabled={!user?.result}
                      onClick={() => dispatch(likePost(post._id))}
                    >
                      <i color="primary" className="fa fa-thumbs-up" />
                      like
                      {/* <Likes post={post}/> */}
                    </button>

                    {/* <button onClick={callingComment}> */}
                    <button>
                      <i className="fa fa-comment-dots" />
                      comment
                    </button>

                    <button
                      type="button"
                      data-toggle="modal"
                      data-target=".share-post"
                    >
                      <i className="fa fa-share" />
                      share
                    </button>
                  </div>
                </div>

                {/* CP:                          {post._id} */}
                {/* {currentPostCommentState} */}
                <div
                  className="modal fade like-and-share-modal common-modal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                  >
                    <div className="modal-content">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span className="fa fa-times" aria-hidden="true">
                          {" "}
                        </span>
                      </button>
                      <div className="modal-body">
                        <nav>
                          <div
                            className="nav nav-tabs"
                            id="nav-tab"
                            role="tablist"
                          >
                            <a
                              className="nav-item nav-link active"
                              id="nav-like-tab"
                              data-toggle="tab"
                              href="#nav-like"
                              role="tab"
                              aria-controls="nav-like"
                              aria-selected="true"
                            >
                              like
                            </a>
                            <a
                              className="nav-item nav-link"
                              id="nav-share-tab"
                              data-toggle="tab"
                              href="#nav-share"
                              role="tab"
                              aria-controls="nav-share"
                              aria-selected="false"
                            >
                              share
                            </a>
                          </div>
                        </nav>

                        <div className="tab-content" id="nav-tabContent">
                          {/* {setCurrentPost(post)} */}
                          PostId: {currentPostCommentState} <br />
                          {post.likes.map((lik) => (
                            <div
                              className="tab-pane fade show active"
                              id="nav-like"
                              role="tabpanel"
                              aria-labelledby="nav-like-tab"
                              aria-selected="true"
                            >
                              {/* CP:{console.log(currentPost)}{currentPost} */}
                              {/* CP:   {currentPostCommentState}                       {post._id} */}
                              <div className="like-share-info scroll-bar">
                                <div className="media align-items-center">
                                  {" "}
                                  <img
                                    src="images/user-2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <h4>LikingUserID: {lik}</h4>
                                    PostId: {currentPostCommentState}
                                    {/* {console.log(lik?.[0])} */}
                                    <br />
                                    {/* {currentPostCommentState.likes}  */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          {post.shares.map((shar) => (
                            <div
                              className="tab-pane fade"
                              id="nav-share"
                              role="tabpanel"
                              aria-labelledby="nav-share-tab"
                              aria-selected="false"
                            >
                              <div className="like-share-info scroll-bar">
                                <div className="media align-items-center">
                                  {" "}
                                  <img
                                    src="images/user-3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <h4> {shar}</h4>

                                    {/* {console.log(shar)} */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="newsfeed-bottom">
                  <div>
                    {post.comments.map((item) => (
                      <div>
                        <hr />
                        <div className="media">
                          {" "}
                          <img
                            src={"images/avatar. png"}
                            className="img-fluid"
                            alt=""
                          />
                          <div className="meida-body">
                            <h3>{item?.userId} </h3>
                            <h6> {moment(item?.commentedAt).fromNow()}</h6>
                            <p>{item?.comment} </p>
                            {/* {console.log(item?.comment,moment(item?.commentedAt).fromNow(),item?.userId )} */}
                          </div>
                        </div>
                        <br />
                      </div>
                    ))}
                  </div>
                  <br />
                  {/* <hr/> */}
                  {/* <CommentBox postid={post._id} /> */}
                  Likes by user Ids
                  {post.likes.map((lik) => (
                    <h4>
                      {lik}
                      <br />
                    </h4>
                  ))}
                  <br />
                  Shares by user Ids
                  {post.shares.map((shar) => (
                    <>
                      <h4>
                        {shar}
                        <br />
                      </h4>
                    </>
                  ))}
                  <form onSubmit={handleCommentSubmit}>
                    <hr />
                    <div className="row">
                      <div className="col-12">
                        <textarea
                          name="comment"
                          type="text"
                          className="form-control"
                          placeholder="type your comment"
                          onChange={handleCommentChange}
                        />
                        <button
                          style={{ display: "inline" }}
                          type="submit"
                          className="blue-btn "
                        >
                          <i className="fa fa-paper-plane" />
                          send
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* {showCommentBox && (
                    <form onSubmit={addComment}>
                    <hr/>
                      <div className="row">
                        <div className="col-12">
                          <textarea
                            // onChange={
                            //   CommentAddChange
                            // // (e) =>
                            // // setPostData({ ...postData, postMessage: e.target.value })
                            // }
                            onChange={(e) =>
                              setCommentState({ ...commentState, comments : e.target.value })
                            
                            } 
                            name="comment"
                            className="form-control"
                            placeholder="type your comment"
                          />
                          <button
                            style={{ display: "inline" }}
                            type="submit"
                            className="blue-btn "
                          >
                            <i className="fa fa-paper-plane" />
                            send
                          </button>
                        </div>
                      </div>
                    </form>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeeds;
