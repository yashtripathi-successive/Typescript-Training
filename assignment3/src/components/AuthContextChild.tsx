
"use client"
import React from "react";
import { useAuthContext } from "./context/AuthContext";
import { usePreferenceContext } from "./context/PreferenceContext";
import { useRouter } from "next/navigation";


function AuthContextChild() {
    

    const {auth, checkAuth} =useAuthContext();
    const {theme,toggleTheme} = usePreferenceContext()


    
    const styles = {
    backgroundColor: theme === 'dark' ? 'white' : 'black',
    color: theme === 'dark' ? 'black' : 'white',
    padding: '2rem',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '2rem'
  };

    
    return ( 
        <div>
          {auth.isloggedin 
          ? 
          <div>
          <p>Welcome {auth.username}</p> 
          <p>Theme is : {theme}</p>
          <button onClick={toggleTheme}>change theme</button>
          </div>
          : 
          <button onClick={checkAuth}>please log in</button>}

        </div>
     );
}

export default AuthContextChild;