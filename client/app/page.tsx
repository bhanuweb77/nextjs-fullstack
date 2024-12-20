"use client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "../components/AdminPannel";
import { Provider } from "react-redux";
import store from "../redux/store"

export default function Home() {
  return (
    <div className="">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPanel/>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}
