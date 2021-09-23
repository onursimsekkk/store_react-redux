import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar  spaced="right" src="https://media-exp1.licdn.com/dms/image/C4D03AQGfOg2IidM3Mg/profile-displayphoto-shrink_200_200/0/1609700747877?e=1637798400&v=beta&t=iE4ozoT6UvrAHTpYucUge0IpXg9RZ0r7pW9XJQwnsB4"/>
        <Dropdown pointing="top center" text="Onur">
          <Dropdown.Menu>
            <Dropdown.Item text="My Informations" icon="info" />
            <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}

export default SignedIn;