import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useNavigate } from 'react-router-dom';

import ProfilePage from './ProfilePage';
import { logout } from '../../BLL/reducers/profileReducer';

const ProfilePageContainer = (props) => {
	const navigate = useNavigate();

	document.title = 'Профиль - Video Monkey';

	React.useEffect(() => {
		if (!props.isLoggedIn) {
			navigate('/login');
		}

		if (props.isLoggedIn && !props.authUserData.isVerified) {
			navigate('/login/verify');
		}
	}, [navigate, props.isLoggedIn, props.authUserData.isVerified]);

	return (
		<div>
			<ProfilePage
				authUserData={props.authUserData}
				logout={props.logout}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoggedIn: state.userProfile.isLoggedIn,
	authUserData: state.userProfile.authUserData,
});

export default compose(
	connect(mapStateToProps, {
		logout,
	})
)(ProfilePageContainer);
