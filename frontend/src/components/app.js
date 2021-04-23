import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/navbar_container';
import ProfileContainer from './Home/profile_container';
import SoundsIndexContainer from './sounds/sounds_index_container';
import SoundsShowContainer from './sounds/sound_show_container';
import SceneIndexContainer from './scenes/scene_index_container';
import SceneShowContainer from './scenes/scene_show_container';
import LandingComponent from './landing/landing';


const App = () => (
    <div>
      <header>
          <NavBarContainer />
      </header>
    

     <Switch>
        <Route exact path='/' component={LandingComponent} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path='/sounds' component={SoundsIndexContainer} />
        <ProtectedRoute exact path='/sounds/sound/:soundId' component={SoundsShowContainer}/>
        <ProtectedRoute exact path='/scenes' component={SceneIndexContainer} />
        <ProtectedRoute exact path='/scenes/:id' component={SceneShowContainer} />
     </Switch>
    </div>

    
);


export default App;