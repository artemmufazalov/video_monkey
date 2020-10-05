import React from 'react';
import {Route} from "react-router-dom";

import "./AuthPage.scss";
import LoginForm from "./LoginPage/LoginContainer";
import RegisterForm from "./RegisterPage/RegisterContainer";

const AuthPage = () => {

    return (
        <section className={"auth"}>
            <div>
                <Route exact path={"/login"} render={() => (<LoginForm/>)}/>
                <Route path={"/register"} render={() => (<RegisterForm/>)}/>
            </div>
        </section>
    );
};

export default AuthPage;