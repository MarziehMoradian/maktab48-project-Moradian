import {ActionTypes} from '../constants/action-type';


export const setUser = (user) => {
    return{
        type: ActionTypes.ADD_USER_INFO,
        payload:user
    }
}

export const setUserInfo = (user) => (dispatch) => {
    dispatch(setUser(user))
}