import * as api from '../api/apis';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type:'FETCH_ALL', payload: data })
    } catch (error) {
        console.log( error )
    }
    // const action = { type : 'FETCH_ALL', payload: []}
    // dispatch(action);
    // return action;
}

export const createPost = (post) => async (dispatch) => {
     try {
         const { data } = await api.createPost(post);

         dispatch({ type:'CREATE', payload: data })
     } catch (error) {
        console.log( error )
     }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);

      console.log(` update post from action data`, data)
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };


export const  deletePost  = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
  
        dispatch({ type: 'DELETE', payload: id });

        console.log(`delete id`, id)
    } catch (error) {
       console.log( error )
    }
}

export const likePost  = (id) => async (dispatch) => {
    try {
        const { data } = await api.like(id);
        dispatch({ type: 'LIKE', payload: id }); 
        
        console.log(`action likePost postid` , id)
    } catch (error) {
       console.log( error )
    }
}
