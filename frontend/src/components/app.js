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
import ExciteIndexContainer from './excites/excite_index_container';
import ExciteShowContainer from './excites/excite_show_container';
const App = () => (
    <div>
      <header>
          <NavBarContainer />
      </header>
    

     <Switch>
        <ProtectedRoute exact path="/" component={ProfileContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path='/sounds' component={SoundsIndexContainer} />
        <Route exact path='/sounds/sound/:soundId' component={SoundsShowContainer}/>
        <ProtectedRoute exact path='/scenes' component={SceneIndexContainer} />
        <ProtectedRoute exact path='/scenes/:id' component={SceneShowContainer} />
        <ProtectedRoute exact path='/excites' component={ExciteIndexContainer} />
        <ProtectedRoute exact path='/excites/excite/:id' component={ExciteShowContainer} />
     </Switch>
    </div>

    
);


export default App;