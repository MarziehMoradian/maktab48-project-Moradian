import { ActionTypes } from "../constants/action-type";

const initialState ={
    user: {
    }
};

export const userInfoReducer = (state = initialState,action) => {

    switch (action.type){
        case ActionTypes.ADD_USER_INFO:
            return {...state.user,user:action.payload}
        default:
            return state;
    }
}