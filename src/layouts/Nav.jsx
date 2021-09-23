import React from 'react'
import CartSummary from './CartSummary';
import { Button, Container, Menu } from 'semantic-ui-react';

function Nav() {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            <Menu.Item>
              <Button inverted color="violet">
                Sign Up
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}

export default Nav;