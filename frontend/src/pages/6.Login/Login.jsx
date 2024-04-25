import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "556163547173-t4d85bper0npj74uuugb5rqh1jjbbq72.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.error('Login Failed:', res);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex-grow bg-gradient-to-b from-yellow-300 to-yellow-100 flex items-center justify-center">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          style={{ width: '100%', height: '40px' }}
        />
      </div>
    </div>
  );
};

export default Login;
