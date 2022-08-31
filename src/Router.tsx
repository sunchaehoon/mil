import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "components/MIL_Home/Home";
import MilLogin from "components/MilLogin/MilLogin";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mil-login" element={<MilLogin />} />
        </Routes>
    );
}

export default Router;