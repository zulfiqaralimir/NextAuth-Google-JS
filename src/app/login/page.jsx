"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Login = () => {
    const session = useSession();
    console.log(session);
    if(session.status=='loading'){
        return <p> Loading ... </p>
    }
    if(session.status=='authenticated'){
        return <button onClick={() => signOut("google") }> LogOut </button>
    }

    if(session.status=='unauthenticated'){
        return <p> User in not Authenticated </p>
    }
  return (
    <button onClick={() => signIn("google") }> Login with Google </button>
  );
}

export default Login;
