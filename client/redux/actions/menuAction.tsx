/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { GET_ALL_NEMU_ERROR, GET_ALL_NEMU_OPTION_SUCCESS, GET_ALL_NEMU_SUCCESS, GET_NEMU_FILTER_SUCCESS, SAVE_NEMU_SUCCESS } from "../types/menuActionType";
import { AppThunk } from "../store";

const saveMenu = (data: any): AppThunk => async (dispatch) => {
    const URL = `http://localhost:3000/menu`
    const payload = {
        name: data.name,
        depth: data.depth,
        parentId: data.parentId
    }
    const headers = {
        'Content-Type': 'application/json'
    }
    axios.post(URL, payload, {headers: headers})
        .then((response) => {
            // console.log(response.data.$values)
            
            dispatch({
                type: SAVE_NEMU_SUCCESS,
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_ALL_NEMU_ERROR,
                payload: error.message
            })
        })
}

const getAllMenuList = (): AppThunk => async (dispatch) => {
    const URL = `http://localhost:3000/menu`
    const headers = {
        'Content-Type': 'application/json'
    }
    axios.get(URL, {headers: headers})
        .then((response) => {
            // console.log(response.data.$values)
            
            dispatch({
                type: GET_ALL_NEMU_SUCCESS,
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_ALL_NEMU_ERROR,
                payload: error.message
            })
        })
}

const getAllOptionList = (): AppThunk => async (dispatch) => {
    const URL = `http://localhost:3000/menu`
    const headers = {
        'Content-Type': 'application/json'
    }
    axios.get(URL, {headers: headers})
        .then((response) => {
            // console.log(response.data.$values)
            
            dispatch({
                type: GET_ALL_NEMU_OPTION_SUCCESS,
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_ALL_NEMU_ERROR,
                payload: error.message
            })
        })
}

const getFilteredMenuList = (id: any): AppThunk => async (dispatch) => {
    const URL = `http://localhost:3000/menu/${id}`
    const headers = {
        'Content-Type': 'application/json'
    }
    axios.get(URL, {headers: headers})
        .then((response) => {
            // console.log(response.data.$values)
            
            dispatch({
                type: GET_NEMU_FILTER_SUCCESS,
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_ALL_NEMU_ERROR,
                payload: error.message
            })
        })
}

export {saveMenu,getAllMenuList, getFilteredMenuList, getAllOptionList}