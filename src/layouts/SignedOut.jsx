import React from 'react'
import { Button } from 'semantic-ui-react'

function SignedOut({login}) {
  return (
    <div>
      <Button onClick={login} color="violet">Login</Button>
      <Button inverted color="violet">Sign In</Button> 
    </div>
  )
}

export default SignedOut
