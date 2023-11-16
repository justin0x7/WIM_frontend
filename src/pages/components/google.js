import React from 'react';

import { GoogleLogin } from '@react-oauth/google';
import { useHistory } from 'react-router-dom';

const GoogleBtn = () => {

	const history = useHistory();

	const handleLoginSuccess = (credentialResponse) => {
		// Redirect to another page after successful login
		history.push('/utility');
		console.log(credentialResponse);
	};

	const handleLoginFailure = () => {
		console.log('Login Failed');
	};

	return (
		<GoogleLogin
			width="250px"
			theme='filled_black'
			onSuccess={handleLoginSuccess}
			onFailure={handleLoginFailure}
		/>
	)
}

export default GoogleBtn;