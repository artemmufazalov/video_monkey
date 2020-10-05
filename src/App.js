import React, {Suspense} from 'react';
import {Redirect, Switch, Route, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import "./styles/index.scss";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import store from "./BLL/store/store";

const NotFound = React.lazy(() => import("./pages/NotFoundPage/NotFound"));

class App extends React.Component {

    catchAllUnhandledErrors = () => {
        alert("Some error occurred");
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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

                            <Route path={"/profile"} render={() => <Redirect to={"/login"}/>}/>

                            <Route path={["/register", "/login"]} render={() => <AuthPage/>}/>

                            <Route path="*" render={() => <NotFound/>}/>
                        </Switch>
                    </Suspense>
                </div>

                <Footer/>
            </div>
        );
    }
}

const MonkeyApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    );
}
export default MonkeyApp;
