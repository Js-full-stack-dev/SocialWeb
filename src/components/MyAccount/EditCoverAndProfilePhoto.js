import React,{useState} from 'react';
import * as api from '../../api/apis';

const EditCoverAndProfilePhoto = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const [imageState, setImageState] = useState(
      user.profilePhoto || user.result.profilePhoto ? user.result.profilePhoto : "images/avatar.png"
      // user ? user.profilePhoto : user.result.profilePhoto
      
      );
    const [coverPhotoState, setCoverPhoto] = useState( user.result.coverPhoto ? user.result.coverPhoto : "images/frnd-cover.png");
    const [EditState, setEditState] = useState();
    

    const onImageChange = async (e) => {
        let imageFile = e.target.files[0];
        if (imageFile) {
            const base64 = await convertBase64(imageFile);
            setImageState(base64)
            setEditState({ ...EditState, profilePhoto: base64 })
            
            console.log(`profile pic changed`, EditState)
            
            await api.profileUpdate(user.result._id,EditState)
            
            updateProfile (EditState)
        }
        // setTimeout(, 1000  )

        }
      
      const convertBase64 = (imageFile) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(imageFile);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      }

      const onImageChangeCover = async (e) => {
        let imageFile = e.target.files[0];
        if (imageFile) {
            const base64 = await convertBase64Cover(imageFile);
            setCoverPhoto(base64)
            setEditState({ ...EditState, coverPhoto: base64 })
            console.log(`cover changed`, EditState)
            await api.profileUpdate(user.result._id,EditState);  
          }
        }
      
      const convertBase64Cover = (imageFile) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(imageFile);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      }

      function updateProfile (EditState)  {
        const profile = {
            ...JSON.parse(localStorage.getItem('profile')),
            ...EditState
        };
        localStorage.setItem('profile', JSON.stringify(profile));
      }

    return (
        <div>
              <div className="row">
              <div className="col-12">

                <div className="frnd-cover"> <img src= {coverPhotoState}  className="img-fluid" alt="" />
                <label name="my-account-cover-img"> 
                <button>                
                <i class="fas fa-pen" onClick={() => document.getElementById("coverPhoto").click()} />
                </button>
                
                </label>
                        <input 
                        id="coverPhoto"
                         style={{display: 'none'}}
                         type="file"
                         multiple={false}
                         onChange={(e) => {onImageChangeCover(e)}}
                         accept=".jpeg, .png, .jpg"
                         />  
                    
                 </div>
              </div>
            </div>
            <div className="frnd-profile-info">
              <div className="row">
                <div className="col-12 text-right">
                  <div className="profile-img"> <img src={imageState} className="img-fluid" alt="" />
                    <label name="my-account-img"> <i className="fa fa-camera" />
                    <input 
                        id="profilePhoto"
                         style={{display: 'none'}}
                         type="file"
                         multiple={false}
                         onChange={(e) => {onImageChange(e)}}
                         accept=".jpeg, .png, .jpg"
                         /> 
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <h1>{user.result.name}</h1>
                </div>
              </div>
            </div>
        </div>
    )
}

export default EditCoverAndProfilePhoto
