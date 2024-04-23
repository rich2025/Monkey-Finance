import { GoogleLogin } from 'react-google-login';

const clientId = "556163547173-t4d85bper0npj74uuugb5rqh1jjbbq72.apps.googleusercontent.com";

const onSuccess = (res) => {
}

const Login = () => {
  function login() {
    return (
      <div className="relative bg-gradient-to-b from-yellow-300">

      {/* Content */}
      <div className="relative z-10 px-6 pt-14 lg:px-8">
      <div id="signInButton">
        <GoogleLogin
          clientID={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          />
      </div>

    </div>

  </div>
    )
  }
}
  
  export default Login