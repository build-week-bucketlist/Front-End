import React from 'react';
import './App.css';
import { Route,} from 'react-router-dom';
import SignInForm from './Sign-in/components/SignInForm'
import ProtectedPage from './BucketList/components/ProtectedPage';
import SignUpForm from './Sign-up/components/SignUpForm'
import PrivateRoute from './Sign-in/components/PrivateRoute';

function App() {
  return (
    <div>
      <nav>
        <span>
          <Link to = '/BucketList' >Bucket List</Link>
        </span>
        <span>
          <Link to = '/SignIn' >Sign In</Link>
        </span>
        <span>
          <Link to = '/SignUp' >Sign Up</Link>
        </span>
      </nav>
      
      <PrivateRoute exact path = '/bucketList' component = {ProtectedPage} />

      <Route exact path = '/signIn' component = {SignInForm} />
      <Route exact path = '/signUp' component = {SignUpForm} />


    </div>
  );
}

export default App;