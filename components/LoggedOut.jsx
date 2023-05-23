import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from '@chakra-ui/react';

function LoggedOut() {
    const { data: session, status } = useSession();

  return (
    <>
        <div>You are logged Out!Please login to continue!</div>
        <Button onClick={signIn}>login</Button>
    </>
    
  )
}

export default LoggedOut