import { ActionTypes } from "../constants/action-type";


const initialState = {
    baskets: [],
    data:{}
}
export const basketReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CREATE_ORDER:
            return {...state.data,data:payload}
            case ActionTypes.SET_ORDERS:
                return { ...state, baskets: payload };
    }
}