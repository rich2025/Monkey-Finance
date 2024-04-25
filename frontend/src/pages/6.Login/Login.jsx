import { useEffect } from 'react';

function Login() {
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "556163547173-t4d85bper0npj74uuugb5rqh1jjbbq72.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    const element = document.getElementById("signInDiv");
    if (element.childNodes.length === 0) {
      google.accounts.id.renderButton(
        element,
        { theme: "outline", size: "large" }
      );
    }
  }, []); 

  return (
    <div className="flex flex-col w-full min-h-screen flex-grow bg-gradient-to-b from-yellow-300 to-yellow-100 flex items-center justify-center">
        <div id="signInDiv" style={{ transform: 'scale(1.5)' }}></div> 
      
    </div>
  );
};

export default Login;
