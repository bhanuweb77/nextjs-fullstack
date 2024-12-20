// import { thunk } from "redux-thunk";
import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware, compose } from "redux";
import rootReducer from "../redux/reducers/index"

// const composeEnhancers = compose;

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;