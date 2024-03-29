import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

import validateForm from '../../../utils/validate/validate';
import LoginForm from './LoginForm';
import { login } from '../../../BLL/reducers/profileReducer';

const formikConfig = {
	enableReinitialize: true,
	mapPropsToValues: (values) => ({ email: '', password: '' }),
	validate: (values) => {
		const errors = {};
		validateForm({ isAuth: true, errors, values });
		return errors;
	},

	handleSubmit: (values, formikBag) => {
		formikBag.props.login(values.email, values.password);
	},
};

const mapStateToProps = (state) => ({
	isLoggedIn: state.userProfile.isLoggedIn,
	isLoginFetching: state.userProfile.isFetching.isLoginFetching,
	loginError: state.userProfile.errors.loginError,
	loginErrorMessage: state.userProfile.errors.loginErrorMessage,
	isVerified: state.userProfile.authUserData.isVerified,
});

export default compose(
	connect(mapStateToProps, {
		login,
	}),
	withFormik(formikConfig)
)((props) => <LoginForm {...props} />);
