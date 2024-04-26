import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; 

function Login() {
  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : {};
  });

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    localStorage.setItem("user", JSON.stringify(userObject));  
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    localStorage.removeItem("user"); 
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "556163547173-t4d85bper0npj74uuugb5rqh1jjbbq72.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    const element = document.getElementById("signInDiv");
    if (element) {
      google.accounts.id.renderButton(
        element,
        { theme: "outline", size: "large" }
      );
    }
    google.accounts.id.prompt();

  
    if (user && Object.keys(user).length > 0) {
      document.getElementById("signInDiv").hidden = true;
    }
  }, [user]); 

  return (
    <div className="flex flex-col w-full min-h-screen flex-grow bg-gradient-to-b from-yellow-300 to-yellow-100 flex items-center justify-center">
      <div id="signInDiv" style={{ transform: 'scale(1.5)' }}></div>
      {Object.keys(user).length !== 0 &&
        <button onClick={handleSignOut}>Sign Out</button>
      }
      {user && 
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
    </div>
  );
}

export default Login;
