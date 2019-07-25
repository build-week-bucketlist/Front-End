import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SignIn from './Sign-in/components/SignInForm'
import BucketList from './BucketList/components/BucketListForm';
import SignUp from './Sign-up/components/SignUpForm'
import PrivateRoute from './Sign-in/components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to = '/BucketList' />
        </li>
        <li>
          <Link to = '/SignIn' />
        </li>
        <li>
          <Link to = '/SignUp' />
        </li>
       
      </ul>
      
      <PrivateRoute exact path = '/BucketList' component = {BucketList} />
      <Route exact path = '/SignIn' component = {SignIn} />
      <Route exact path = '/SignUp' component = {SignUp} />
    </div>
  );
}

export default App;