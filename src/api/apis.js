import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
axios.defaults.headers.common['content-type'] = 'application/json';
axios.defaults.headers.common['accept'] = 'application/json';

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    req.headers.contentType = `application/json`;
    req.headers.accept = `application/json`;
  }

  return req;
});

// posts

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const like = (id, userId) => API.patch(`/posts/like/${id}`, userId);
export const share = (id, userId) => API.patch(`/posts/share/${id}`, userId);
export const comment = (id, comment) => API.patch(`/posts/comments/${id}`, comment);

export const getlikes = (id) => API.get(`/posts/like/${id}`);
export const getshares = (id) => API.get(`/posts/share/${id}`);
export const getcomments = (id) => API.get(`/posts/comments/${id}`);



// users

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const profileUpdate = (id, EditState) => API.patch(`/user/updateProfile/${id}`, EditState);

export const forgotPassword1 = (formData) => API.put('/user/forgotPassword1', formData);
export const forgotPassword2 = (formData) => API.patch('/user/forgotPassword2', formData);
export const forgotPassword3 = (formData) => API.patch('/user/forgotPassword3', formData);

export const allUsers = () => API.get('/user/users');


