import{ useState } from 'react'
import CartSummary from './CartSummary';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { useHistory } from 'react-router';
import { Container, Menu } from 'semantic-ui-react';

function Nav() {
const [isAuthenticated, setIsAuthenticated] = useState(true);
const history = useHistory();

function handleSign() {
  setIsAuthenticated(!isAuthenticated)
  history.push("/")
}
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            <Menu.Item>
              {isAuthenticated ? <SignedIn signOut={handleSign} /> : <SignedOut login={handleSign} />}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}

export default Nav;