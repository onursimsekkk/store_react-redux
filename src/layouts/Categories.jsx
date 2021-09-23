import React from 'react'
import { Menu } from 'semantic-ui-react';

function Categories() {
  return (
    <>
      <Menu pointing vertical>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </>
  );
}

export default Categories;