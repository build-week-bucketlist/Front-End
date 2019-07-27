import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SignInForm from './Sign-in/components/SignInForm'
import BucketList from './BucketList/components/BucketListForm';
import SignUpForm from './Sign-up/components/SignUpForm'
import PrivateRoute from './Sign-in/components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to = '/BucketList' />
        </li>
        <li>
          <Link to = '/SignIn'> <SignInForm /> </Link>
        </li>
        <li>
          <Link to = '/SignUp'>  </Link>
        </li>
      </ul>
      
      <PrivateRoute exact path = '/bucketList' component = {BucketList} />
      <Route exact path = '/api/login' component = {SignInForm} />
      <Route exact path = '/api/register' component = {SignUpForm} />
    </div>
  );
}

export default App;