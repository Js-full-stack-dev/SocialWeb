import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { moment } from "moment";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../actions/posts";

// const url = 'http://localhost:5000';

const CreatePost = ({ currentId, setCurrentId }) => {
  const history = useHistory();

  const [postData, setPostData] = useState({
    // visibility: "",
    postMessage: "",
    selectedFile: "",
  });

  const [selectedFile, setSelectedFiles] = useState();

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  // const handleChange = (e) => {
  //   setPostData({...postData, [e.target.name]: e.target.value })
  // }

  const handleSubmitCreatePost = (e) => {
    e.preventDefault();

    // if (currentId === null) {
    dispatch(
      createPost({
        ...postData,
        name: user?.result?.name,
        profilePhoto: user?.result?.profilePhoto,
      })
    );
    // } else {
    // dispatch(updatePost(currentId, {...postData , name: user?.result?.name }));
    // }
    console.log(`create post formData`, postData);

    clear();

    // window.location.reload()

    // axios.get('http://localhost:5000/posts')
    // .then(post => {
    //   const postDataResponse = post.data;
    //   setPostData(postDataResponse);
    // })
  };

  const clear = () => {
    // setCurrentId(null);
    setPostData({ postMessage: "", selectedFile: "" });
  };

  const onImageChange = async (e) => {
    let postFile = e.target.files[0];
    if (postFile) {
      const base64 = await convertBase64(postFile);
      setSelectedFiles(base64);
      setPostData({ ...postData, selectedFile: base64 });
    }
  };

  const convertBase64 = (postFile) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(postFile);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmitCreatePost}>
        <div className="media">
          {" "}
          <img
            src={
              user.result.profilePhoto
                ? user.result.profilePhoto
                : "images/avatar.png"
            }
            className="img-fluid"
            alt=""
          />
          <div className="media-body">
            <label name="status-info" className="status-content">
              What's on your mind?
            </label>
            <textarea
              style={{ maxWidth: "90%" }}
              value={postData.postMessage}
              onChange={(e) =>
                setPostData({ ...postData, postMessage: e.target.value })
              }
              id="status-info"
              cols
              rows
              className="form-control"
            />
            <ul>
              <li>
                <label name="status-pic-or-vid">
                  <div className="media">
                    {" "}
                    <i className="fa fa-camera" />
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("postSelectedFiles").click()
                      }
                    >
                      Pictures / videos
                    </button>
                  </div>
                </label>

                {/* <input type="file" className="d-none" id="status-pic-or-vid" accept="audio/*,video/*,image/*" /> */}
              </li>
              {/* <li> <a href="live-video.html"><i className="fa fa-video" /> Live Video</a> </li> */}
            </ul>
            

            <div className="media-body" >
            {
                selectedFile &&
                <img src={selectedFile} alt="" className="w-30 h-30" style={{ width:'150px', height:'150px'}} />
            }
              

              <input
                type="file"
                id="postSelectedFiles"
                style={{ display: "none" }}
                accept="audio/*, video/*, image/*"
                multiple={true}
                onChange={(e) => {
                  onImageChange(e);
                }}
              />
            </div>
            <button
              type="submit"
              className="form-control btn btn-primary"
              disabled={!postData.postMessage && !postData.selectedFile}
            >
              Post{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
