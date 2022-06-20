import React from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import './AuthPage.scss';
import LoginForm from './LoginPage/LoginContainer';
import RegisterForm from './RegisterPage/RegisterContainer';
import EmailConfirmation from './EmailConfirmation/EmailConfirmationContainer';

const AuthPage = (props) => {
	const navigate = useNavigate();

	React.useEffect(() => {
		if (props.isLoggedIn && props.isVerified) {
			navigate('/profile');
		}
	}, [navigate, props.isLoggedIn, props.isVerified]);

	const { pathname } = useLocation();
	const isRegister = pathname.includes('register');

	if (!isRegister) {
		return (
			<section className={'auth'}>
				<div>
					<Routes>
						<Route
							path="verify"
							element={<EmailConfirmation option={'login'} />}
						/>

						<Route index element={<LoginForm />} />
					</Routes>
				</div>
			</section>
		);
	} else {
		return (
			<section className={'auth'}>
				<div>
					<Routes>
						<Route
							path="verify/reject"
							element={<EmailConfirmation option={'reject'} />}
						/>

						<Route
							path="verify/submit"
							element={<EmailConfirmation option={'submit'} />}
						/>

						<Route
							path="verify"
							element={<EmailConfirmation option={'initial'} />}
						/>

						<Route index element={<RegisterForm />} />
					</Routes>
				</div>
			</section>
		);
	}
};

const mapStateToProps = (state) => ({
	isLoggedIn: state.userProfile.isLoggedIn,
	isVerified: state.userProfile.authUserData.isVerified,
});

export default connect(mapStateToProps, {})(AuthPage);
