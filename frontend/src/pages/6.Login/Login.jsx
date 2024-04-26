import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Ensure this is the correct import statement based on library export

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

    console.log(userObject.email)

    //send email to backend
    //fetch('/api/user', {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json',
    //  },
    //  body: JSON.stringify({ email: userObject.email }),
    //})
    //.then(response => response.json())
    //.then(data => {
    //  console.log('Success:', data);
    //})
    //.catch((error) => {
    //  console.error('Error:', error);
    //});
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
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100">
      <div id="signInDiv" style={{ transform: 'scale(1.5)' }}></div>
      {Object.keys(user).length === 0 && (
        <div className="p-12 mt-4 bg-white rounded-lg shadow-xl">
          <p className="text-2xl font-bold text-gray-700 mb-4">Please login to view your portfolio.</p>
          <div id="signInDiv"></div>  {/* Ensure this div is for positioning/style or remove if unnecessary */}
        </div>
      )}
      {Object.keys(user).length !== 0 && (
        <div className="p-20 mt-20 bg-white rounded-lg shadow-xl text-center">
          <h1 className="text-2xl font-semibold text-gray-700">Welcome, {user.name}!</h1>
          <img src={user.picture} alt="User" className="mx-auto my-4 w-24 h-24 rounded-full shadow-lg"/>
          <button 
            onClick={handleSignOut} 
            className="mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
