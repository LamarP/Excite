import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/navbar_container';
import ProfileContainer from './Home/profile_container';
import SoundsContainer from './sounds/sounds_container';

const App = () => (
    <div>
      <header>
          <NavBarContainer />
      </header>
    

     <Switch>
         <Route exact path='/sounds' component={SoundsContainer} />
        <ProtectedRoute exact path="/" component={ProfileContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
     </Switch>
    </div>

    
);


export default App;