import React, {Suspense} from 'react';
import {Switch, Route, HashRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";

import "./styles/index.scss";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import store from "./BLL/store/store";
import {auth} from "./BLL/reducers/profileReducer";
import ProfilePage from "./pages/Profile/ProfilePageContainer";
import SupportPage from "./pages/Support/SupportPageContainer";

const NotFound = React.lazy(() => import("./pages/NotFoundPage/NotFound"));

class App extends React.Component {

    catchAllUnhandledErrors = () => {
        alert("Some error occurred");
    }

    componentDidMount() {
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
        if (!this.props.isLoggedIn)
            this.props.auth();
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }


    render() {
        return (
            <div className={"app-wrapper"}>
                <Header/>

                <div className={"app-wrapper__mainContent"}>
                    <Suspense fallback={<Preloader large/>}>
                        <Switch>
                            <Route path="/" exact render={() => <MainPage/>}/>

                            <Route path={"/profile"} render={() => <ProfilePage/>}/>

                            <Route path={["/register", "/login"]} render={() => <AuthPage/>}/>

                            <Route path={"/support"} render={()=><SupportPage/>}/>

                            <Route path="*" render={() => <NotFound/>}/>
                        </Switch>
                    </Suspense>
                </div>

                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.userProfile.isLoggedIn
})

const AppContainer = connect(mapStateToProps, {
    auth
})(App);

const MonkeyApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    );
}
export default MonkeyApp;
