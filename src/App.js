import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory,
} from "react-router-dom";
import PATH from "./constants/RoutesPath";

const Home = React.lazy(() => import("./pages/Home"));
const History = React.lazy(() => import("./pages/History"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={[
            PATH.DEFAULT,
            PATH.HOME
          ]} component={Home} />
          <Route path={PATH.HISTORY} component={History}/>
          <Route path="*" component={NotFound} />
      </Switch>
      </Suspense>

    </Router>
  );


}

export default App;
