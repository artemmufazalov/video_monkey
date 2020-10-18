import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import "./AuthPage.scss";
import LoginForm from "./LoginPage/LoginContainer";
import RegisterForm from "./RegisterPage/RegisterContainer";
import EmailConfirmation from "./EmailConfirmation/EmailConfirmationContainer";


const AuthPage = (props) => {

    if (props.isLoggedIn && props.isVerified) {
        return (
            <Redirect to={"/profile"}/>
        );
    }

    return (
        <section
            className={"auth"}>
            <div>
                <Switch>
                    <Route path={"/login/verify"}
                           render={() => (<EmailConfirmation option={"login"}/>)}/>

                    <Route path={"/login"} render={() => (<LoginForm/>)}/>

                    <Route path={"/register/verify/reject"}
                           render={() => <EmailConfirmation option={"reject"}/>}/>

                    <Route path={"/register/verify/submit"}
                           render={() => <EmailConfirmation option={"submit"}/>}/>

                    <Route path={"/register/verify"}
                           render={() => <EmailConfirmation option={"initial"}/>}/>

                    <Route path={"/register"} render={() => (<RegisterForm/>)}/>
                </Switch>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.userProfile.isLoggedIn,
    isVerified: state.userProfile.authUserData.isVerified
})

export default connect(mapStateToProps, {})(AuthPage);