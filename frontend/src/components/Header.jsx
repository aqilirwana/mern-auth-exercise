import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout} from '../slices/authSlice';

const Header = () => {
  // bring in the userInfo from the auth state. his is essentially the data that we have in local storage
  const {userInfo} = useSelector((state) => state.auth);

  // bring in the useDispatch hook from react-redux and the useNavigate hook from react-router-dom
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // bring in the logout mutation from the usersApiSlice and the logout action from the authSlice 
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>MERN Auth</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              { userInfo ? (
                <>
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                  <NavDropdown.Item>
                    Profile
                  </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                </>
              ) : (
                <>
                <LinkContainer to='/login'>
              <Nav.Link>
                <FaSignInAlt /> Sign In
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/register'>
              <Nav.Link>
                <FaSignOutAlt /> Sign Up
              </Nav.Link>
              </LinkContainer>
                </>
              ) }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;