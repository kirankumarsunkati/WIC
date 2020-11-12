import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import One from './One';
import AppFourteen from './AppFourteen';
import AppFifteen from './AppFifteen';
import Test from './Test'
class Routeer extends React.Component{
    render(){
        return(
            <Router>
              <Route exact path="/1" component={One}>
              </Route>
              <Route exact path="/14" component={AppFourteen}>
              </Route>
              <Route exact path="/15" component={AppFifteen}>
              </Route>
              <Route exact path="/login" component={Test}>
              </Route>
            </Router>
        )
    }
}

export default Routeer;