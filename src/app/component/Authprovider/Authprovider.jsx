"use client"
import React from 'react';
import {SessionProvider} from "next-auth/react"

const Authprovider = ({childern}) => {
  return (
    <SessionProvider>
      {childern}
    </SessionProvider>
  )
}

export default Authprovider
