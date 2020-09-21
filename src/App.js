import React, {Suspense} from 'react';
import {Switch, Route, HashRouter} from "react-router-dom";

import "./styles/index.scss";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";

const NotFound = React.lazy(() => import("./pages/NotFoundPage/NotFound"));

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>

            <div className={"app-wrapper__mainContent"}>
                <Suspense fallback={<Preloader large/>}>
                    <Switch>
                        <Route path="/" exact render={() => <MainPage/>}/>

                        <Route path="*" render={() => <NotFound/>}/>
                    </Switch>
                </Suspense>
            </div>

            <Footer/>
        </div>
    );
}


const MonkeyApp = () => {
    return (
        <HashRouter>
            <App/>
        </HashRouter>
    );
}
export default MonkeyApp;
