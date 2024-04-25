import React from 'react';
import { GoogleLogin } from 'react-google-login';

// Your client ID from Google Developer Console
const clientId = "556163547173-t4d85bper0npj74uuugb5rqh1jjbbq72.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.error('Login Failed:', res);
  };

  return (
    <div className="relative bg-gradient-to-b h-stretch w-full from-yellow-300 to-yellow-100 flex items-center justify-center">
      <div className="px-6 pt-14 lg:px-8">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          style={{ width: '200%', height: '40px' }}
        />
      </div>
    </div>

    
  );
};

export default Login;
