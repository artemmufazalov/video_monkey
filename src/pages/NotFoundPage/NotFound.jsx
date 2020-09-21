import React from 'react';
import {notFoundImg} from "../../assets";

import "./NotFound.scss";

const NotFound = () => {
    return (
        <div className={"pageNotFoundWrapper"}>
            <img src={notFoundImg} alt="page not found"/>
            <div>
                Упс! Страница, которую вы ищете, не существует
            </div>
        </div>
    );
};

export default NotFound;