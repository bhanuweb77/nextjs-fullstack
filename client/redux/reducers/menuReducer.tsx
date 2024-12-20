/* eslint-disable @typescript-eslint/no-explicit-any */
import { GET_ALL_NEMU_ERROR, GET_ALL_NEMU_OPTION_SUCCESS, GET_ALL_NEMU_SUCCESS, GET_NEMU_FILTER_SUCCESS, SAVE_NEMU_SUCCESS } from "../types/menuActionType"

const initialState = {
    menuList: [],
    optionList: [],
    message: '',
    success: false
}

const menuReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SAVE_NEMU_SUCCESS:
            return {
                ...state,
                menuList: [...state.menuList, action.payload],
                optionList: [...state.optionList, action.payload]
            }
        case GET_ALL_NEMU_SUCCESS:
            return {
                ...state,
                menuList: action.payload
            }
        case GET_ALL_NEMU_OPTION_SUCCESS:
            return {
                ...state,
                optionList: action.payload
            }
        case GET_ALL_NEMU_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case GET_NEMU_FILTER_SUCCESS:
            return {
                ...state,
                menuList: action.payload
            }
        default:
            return state;
            
    }
}

export default menuReducer