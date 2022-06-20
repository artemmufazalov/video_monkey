import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';

import './styles/index.scss';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import store from './BLL/store/store';
import { auth } from './BLL/reducers/profileReducer';
import ProfilePage from './pages/Profile/ProfilePageContainer';
import SupportPage from './pages/Support/SupportPageContainer';

const NotFound = React.lazy(() => import('./pages/NotFoundPage/NotFound'));

// @TODO: починить Suspense
// @TODO: сделать адаптивку
// @TODO: поправить верстку страницы поддержки

class App extends React.Component {
	catchAllUnhandledErrors = () => {
		alert('Some error occurred');
	};

	componentDidMount() {
		window.addEventListener(
			'unhandledrejection',
			this.catchAllUnhandledErrors
		);
		if (!this.props.isLoggedIn) this.props.auth();
	}

	componentWillUnmount() {
		window.removeEventListener(
			'unhandledrejection',
			this.catchAllUnhandledErrors
		);
	}

	render() {
		return (
			<div className={'app-wrapper'}>
				<Header />

				<div className={'app-wrapper__mainContent'}>
					<Suspense fallback={<Preloader large />}>
						<Routes>
							<Route path="/" exact element={<MainPage />} />

							<Route path="/profile" element={<ProfilePage />} />

							<Route path="/register/*" element={<AuthPage />} />

							<Route path="/login/*" element={<AuthPage />} />

							<Route path="/support" element={<SupportPage />} />

							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
				</div>

				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.userProfile.isLoggedIn,
});

const AppContainer = connect(mapStateToProps, {
	auth,
})(App);

const MonkeyApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};
export default MonkeyApp;
