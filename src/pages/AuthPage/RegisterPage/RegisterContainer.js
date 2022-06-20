import RegisterForm from './RegisterForm';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { compose } from 'redux';
import React from 'react';

import { register } from '../../../BLL/reducers/profileReducer';
import validateForm from '../../../utils/validate/validate';

const formikConfig = {
	enableReinitialize: true,
	mapPropsToValues: (values) => ({
		email: '',
		name: '',
		password: '',
		passwordRepeat: '',
	}),
	validate: (values) => {
		const errors = {};
		validateForm({ isAuth: false, errors, values });
		return errors;
	},
	handleSubmit: (values, formikBag) => {
		formikBag.props.register(values.email, values.name, values.password);
	},
};

const mapStateToProps = (state) => ({
	isRegistrationSuccessful: state.userProfile.isRegistrationSuccessful,
	isRegistrationFetching: state.userProfile.isFetching.isRegistrationFetching,
	registrationError: state.userProfile.errors.registrationError,
	registrationErrorMessage: state.userProfile.errors.registrationErrorMessage,
});

export default compose(
	connect(mapStateToProps, {
		register,
	}),
	withFormik(formikConfig)
)((props) => <RegisterForm {...props} />);
