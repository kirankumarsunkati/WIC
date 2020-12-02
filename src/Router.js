import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import One from './One';
import AppFourteen from './AppFourteen';
import AppFifteen from './AppFifteen';
import AppSixteen from './AppSixteen';
import Test from './Test'
import AppSeventeen from "./AppSeventeen";
class Routeer extends React.Component{
    render(){
        return(
          <div>
            <Router>
              <Route exact path="/1" component={One}>
              </Route>
              <Route exact path="/14" component={AppFourteen}>
              </Route>
              <Route exact path="/15" component={AppFifteen}>
              </Route>
              <Route exact path="/16" component={AppSixteen}>
              </Route>
              <Route exact path="/17" component={AppSeventeen}>
              </Route>
              <Route exact path="/login" component={Test}>
              </Route>
              <Route exact path="/16#" component={Test}>
              </Route>             
            </Router>
          </div>
        )
    }
}

export default Routeer;