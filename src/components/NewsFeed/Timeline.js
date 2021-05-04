import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../actions/posts';
import { useSelector } from "react-redux";
import axios from "axios";
import NewsFeeds from '../NewsFeeds';



const Timeline = ({post}) => {



  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const posts = useSelector((state) => state.posts);
const [PostData, setPostData] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:5000/posts')
    .then(post => {
    const postDataResponse = post.data;

    // console.log(`postDataResponse`, postDataResponse);

    let timelinePosts = []

for (let i = 0; i < postDataResponse.length; i++) {
  if (post.data[i].creator == user.result._id){

    timelinePosts.push(post.data[i]);

    // console.log(`timeline ` , timelinePosts)
  }
}
    
    // const timelinePosts = postDataResponse.filter(currentUserPost => user.result._id == post.data[8].creator )
    
    // .map(myposts => {
    //   console.log(`myposts`, myposts)
    //   })

// console.log(`check`, user.result._id , post.data[8].creator)

    setPostData(timelinePosts);

    })
  })

return (
  <div>
  {
    PostData.map((post) => (
  

<div className="newsfeed box" key={post._id}>
<div className="newsfeed-top">
<div className="media">
<div className="profile-with-active position-relative"> <img src={post.profilePhoto} className="img-fluid" alt="" /> <span className="green-bg" /> </div>
<div className="media-body">
<div className="d-flex justify-content-between">
  <h3>  {post?.name}  </h3>
        <div className="dropdown">
    <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-h" /> </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
    <a className="dropdown-item" href="#" data-toggle="modal" data-target=".privacy-modal">privacy setting</a> 
    {/* <a className="dropdown-item" href="" disabled>edit post</a>  */}
    <a className="dropdown-item" href="#" data-toggle="modal" data-target=".delete-post-modal">delete</a> 
    </div>
    </div>
</div>
 <div>
             <div className="modal fade delete-post-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
        </div>
        </div>
<h6>Posted at {moment(post?.createdAt).fromNow()}</h6>
<h5> {
  (post.visibility == "onlyme")
  ?
( 
   <i className="fa fa-lock" />
   )
  :
( 
   (post.visibility == "friends")
    ?
    <i className="fa fa-users" />
    :
    <i className="fa fa-globe-africa" /> 
  )
} </h5>
<div className="newsfeed-center">
<p>{post?.postMessage}</p>
{ post.selectedFile && <img src={post?.selectedFile} className="img-fluid" alt="NewsFeed Image" />}
  <form action>
    <div className="likes-and-shares-info d-flex justify-content-between">
      <div className>
        <ul className="left">
          <li className>
            <button type="button"><i className="fa fa-thumbs-up" /></button>
          </li>
          <li className>
            <button type="button"><i className="fa fa-heart" /></button>
          </li>
          <li className>
            <button type="button"><i className="fa fa-smile" /></button>
          </li>
        </ul>
        <h6 data-toggle="modal" data-target=".like-and-share-modal">Joey and 160 others</h6>
      </div>
      <div className>
        <ul className="right">
          <li className>
            <button type="button" className><i className="fa fa-comment-dots" /> 2 </button>
          </li>
          <li className>
            <button type="button"><i className="fa fa-share" /> share</button>
          </li>
        </ul>
      </div>
    </div>
  </form>
  <div className="like-share-comment-bar d-flex justify-content-around align-items-center">
    <button className><i className="fa fa-thumbs-up" />like</button>
    <button onclick="callingComment()"><i className="fa fa-comment-dots" />comment</button>
    <button type="button" data-toggle="modal" data-target=".share-post"><i className="fa fa-share" />share</button>
  </div>
</div>
<div className="newsfeed-bottom">
  <div className="media"> <img src="" className="img-fluid" alt="" />
    <div className="meida-body">
      <h3>comment by Fos</h3>
      <h6>2 Hrs Ago</h6>
      <p>post message 1 comment 1 </p>
    </div>
  </div>
  <div className="comment-box" id="comment-box">
    <form action>
      <div className="row">
        <div className="col-12">
          <textarea name id cols rows className="form-control" placeholder="type your comment"  />
          <button type="submit" className="blue-btn"><i className="fa fa-paper-plane" />send</button>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
</div>
</div>
</div>
                ))
    }


    </div>
  )
}


export default Timeline
