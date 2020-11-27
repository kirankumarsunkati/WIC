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
              <Route exact path="/login" component={Test}>
              </Route>
              <Route exact path="/16#" component={Test}>
              </Route>
              <Link to={'1'}> One</Link>
              <Link to={'14'}> AppFifteen</Link>
              <Link to={'15'}> AppFourteen</Link>
              <Link to={'16'}> 16</Link>
            </Router>
            
            <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Routeer;