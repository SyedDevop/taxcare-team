///<reference types="vite-plugin-svgr/client" />;
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ErrorPage from "./Pages/Error/ErrorPage";
import PublicRoute from "./Routes/PublicRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/page-not-found" component={ErrorPage} />
          <Route>
            <PublicRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
