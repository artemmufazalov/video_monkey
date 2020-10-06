import React from 'react';
import {NavLink} from "react-router-dom";

import {notFoundImg} from "../../assets";
import "./NotFound.scss";


const NotFound = () => {
    return (
        <div className={"pageNotFoundWrapper"}>
            <img src={notFoundImg} alt="page not found"/>
            <div>
                Упс! Страница, которую вы ищете, не существует.
                <NavLink to={"/"}> На главную</NavLink>
            </div>
        </div>
    );
};

export default NotFound;