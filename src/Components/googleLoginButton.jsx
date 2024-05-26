import React from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // Update import to named import

const GoogleLoginButton = () => {
  const clientId = "YOUR_CLIENT_ID_HERE"; // Make sure to add your actual client ID here

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(jwtDecode(credentialResponse.credential)); // Update usage to named function
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;