import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

const MenuExample = () => (
  <Menu>
    <Container>
      <Menu.Item as="a" header>
        <Image
          size="small"
          src="https://www.myiconstory.com/wp-content/uploads/2018/06/Cape-Town-Table-Top-Mountain-1024x1024.png"
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a" name="login">
          Login
        </Menu.Item>
        <Menu.Item as="a" name="register">
          Register
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default MenuExample;
