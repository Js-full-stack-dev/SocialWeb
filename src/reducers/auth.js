const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            // console.log(action?.data);
            localStorage.setItem('profile' , JSON.stringify({ ...action.data}));
            return {...state, authData : action.data};

        case 'AUTHERROR':    
            // const authError=localStorage.getItem('authError');
            // return {...state, authError : authError};
        case 'PROFILEUPDATE':
            // return posts.map((profile) => user._id === action.payload._id ? action.payload : post);
            localStorage.setItem('profile' , JSON.stringify({ ...action.data}));
            return {...state, authData : action.data};

        case 'LOGOUT':
                localStorage.clear();
                return {...state, authData : null};
        default:
            return state;
    }
}

export default authReducer;