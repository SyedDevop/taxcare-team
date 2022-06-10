import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ErrorPage from "./Pages/Error/ErrorPage";
import { ForgetPassword, LoginForm } from "./Components/Auth";
import SignUp from "./Pages/SignUp/SignUp";
import PublicRoute from "./Routes/PublicRoute";

const App: FC = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/page-not-found" component={ErrorPage} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/forget-password" component={ForgetPassword} />
            <Route>
              <PublicRoute />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
