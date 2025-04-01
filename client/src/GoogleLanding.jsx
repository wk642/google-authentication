import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function GoogleLanding() { 
  return (
    <>
      {/* renders the google login form */}
      <GoogleLogin 
        // If successfully logged in 
        onSuccess={(loginInfo) =>{
          console.log(loginInfo);
          console.log(jwtDecode(loginInfo.credential));
        }}
        //If not successfully logged in
        onError={() => alert("Login Failed")}
      />
    </>
  )
}