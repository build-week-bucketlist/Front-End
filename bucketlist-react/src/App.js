import React from 'react';
import './App.css';
import { Route,} from 'react-router-dom';
import SignInForm from './Sign-in/components/SignInForm'
import ProtectedPage from './BucketList/components/ProtectedPage';
import SignUpForm from './Sign-up/components/SignUpForm'
import PrivateRoute from './Sign-in/components/PrivateRoute';
import {Navbar,Nav} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar   bg="primary" variant="dark">
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>

      <Nav className="col-md-4 mr-auto">
      
          <Nav.Link href="BucketList"  >
            BucketList
          </Nav.Link>
        
      
          <Nav.Link href = '/SignIn' >
         SignIn
          </Nav.Link>
        
      
          <Nav.Link href = '/SignUp' >
          SignUp
          </Nav.Link>
          </Nav>
      
      </Navbar>
      
      <PrivateRoute exact path = '/bucketList' component = {ProtectedPage} />

      <Route exact path = '/signIn' component = {SignInForm} />
      <Route exact path = '/signUp' component = {SignUpForm} />


    </div>
  );
}

export default App;