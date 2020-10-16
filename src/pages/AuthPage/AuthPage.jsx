import React from 'react';
import {Route} from "react-router-dom";

import "./AuthPage.scss";
import LoginForm from "./LoginPage/LoginContainer";
import RegisterForm from "./RegisterPage/RegisterContainer";
import EmailConfirmation from "./EmailConfirmation/EmailConfirmationContainer";

const AuthPage = () => {

    return (
        <section className={"auth"}>
            <div>
                <Route exact path={"/login/verify"} render={() => (<EmailConfirmation option={"login"}/>)}/>

                <Route path={"/login"} render={() => (<LoginForm/>)}/>

                <Route exact path={"/register/verify"}
                       render={() => <EmailConfirmation option={"initial"}/>}/>

                <Route exact path={"/register/verify/reject"}
                       render={() => <EmailConfirmation option={"reject"}/>}/>

                <Route exact path={"/register/verify/submit"}
                       render={() => <EmailConfirmation option={"submit"}/>}/>

                <Route path={"/register"} render={() => (<RegisterForm/>)}/>
            </div>
        </section>
    );
};

export default AuthPage;