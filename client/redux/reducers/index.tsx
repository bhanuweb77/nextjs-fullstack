import { combineReducers } from '@reduxjs/toolkit';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
    menuDataList: menuReducer
});

export default rootReducer;