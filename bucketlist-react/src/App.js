import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SignInForm from './Sign-in/components/SignInForm'
import ProtectedPage from './BucketList/components/ProtectedPage';
import SignUpForm from './Sign-up/components/SignUpForm'
import PrivateRoute from './Sign-in/components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to = '/BucketList' >BucketList</Link>
        </li>
        <li>
          <Link to = '/SignIn' >SignIn</Link>
        </li>
        <li>
          <Link to = '/SignUp' >SignUp</Link>
        </li>
      </ul>
      
      <PrivateRoute exact path = '/bucketList' component = {ProtectedPage} />

      <Route exact path = '/signIn' component = {SignInForm} />
      <Route exact path = '/signUp' component = {SignUpForm} />


    </div>
  );
}

export default App;