// import { AUTH } from '../constants/actionTypes';
import * as api from '../api/apis';

export const signin = (formData, history) => async (dispatch) => {

    // api.signIn(formData)
    // .then(({data}) => {
    //   dispatch({ type: 'AUTH', data });
    //   history.push('/home');
  
    // })
    // .catch(e => {
    //   console.log(e.response.data);
      
    // });

  try {
    const { data } = await api.signIn(formData)
    // .then(
    //   // res => res.json()
    //   data => { 
    //     dispatch({ type: 'AUTH', data });
    // history.push('/home');
    // },
    // error => {
    //   console.log(error);
    //   history.push('/');
    // }
    //   )

    dispatch({ type: 'AUTH', data });
    history.push('/home');

  } catch (error) {  
     let authError = error.response.data;

    //  dispatch({ type: 'AUTHERROR', authError });
     console.log(authError);
    // history.push('/');
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: 'AUTH', data });

    history.push('/home');
  } catch (error) {
    console.log(error);
    history.push('/');
  }
};


export const profileUpdate = (EditState, history) => async (dispatch) => {
  try {
    const { data } = await api.profileUpdate(EditState);

    dispatch({ type: 'PROFILEUPDATE', payload: data });

  } catch (error) {
    console.log(error);
  }
};


