import { combineReducers } from 'redux';
import {bucketlistReducer} from '../BucketList/bucketlistReducer';
import {signinReducer} from '../Sign-in/signinReducer';
import {signupReducer} from '../Sign-up/signupReducer';

export default combineReducers({
    bucketlistReducer,
    signinReducer,
    signupReducer
});
