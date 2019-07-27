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
<<<<<<< HEAD
      <Route exact path = '/api/login' component = {SignInForm} />
      <Route exact path = '/api/register' component = {SignUpForm} />
=======
      <Route exact path = '/signIn' component = {SignInForm} />
      <Route exact path = '/signUp' component = {SignUpForm} />
>>>>>>> 854ec17d6776068ba1d060336902d437acee750f
    </div>
  );
}

export default App;