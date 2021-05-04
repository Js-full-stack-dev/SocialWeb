import React,{useState} from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { createPost, updatePost } from "../../actions/posts";

const PrivacyModal = ({radioValue}) => {

  // const [radioValue , setRadioValue] = useState()
  // const dispatch = useDispatch();

  const handlePrivacy = (e) => {

    // setRadioValue(e.target.value)

    const radioValue = e.target.value ;

    // dispatch(createPost({...postData , name: user?.result?.name, profilePhoto: user?.result?.profilePhoto}));    

    console.log(`privacy is on :`, radioValue);
  }

    return (
        <div>
        </div>
    )
}

export default PrivacyModal
