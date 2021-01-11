import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import PrivateRoute from "./modules/Auth/components/PrivateRoute";
import ErrorUnAuthorized from "./modules/Auth/pages/ErrorUnAuthorized";
import DashboardPage from "./pages/DashboardPage";
import TokenHandler from "./modules/Auth/components/TokenHandler";
import { roles } from "../Constants";
import Alert from "./modules/Demo/Alert";
import Test from "./pages/Test";
import ReduxDemo from "./modules/Demo/pages/ReduxDemo";
import WithTextField from "./modules/FormikDemo/pages/WithTextField";
import WithCheckboxAndRadio from "./modules/FormikDemo/pages/WithCheckboxAndRadio";
import WithDropdown from "./modules/FormikDemo/pages/WithDropdown";
import WithDatePicker from "./modules/FormikDemo/pages/WithDatePicker";

export default function BasePage(props) {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {<Redirect exact from="/" to="/dashboard" />}
        <ContentRoute exact path="/dashboard" component={DashboardPage} />
        <ContentRoute exact path="/alert" component={Alert} />
        <ContentRoute exact path="/withTextField" component={WithTextField} />
        <ContentRoute exact path="/withCheckboxAndRadio" component={WithCheckboxAndRadio} />
        <ContentRoute exact path="/withDropdown" component={WithDropdown} />
        <ContentRoute exact path="/withDatepicker" component={WithDatePicker} />
        <ContentRoute exact path="/reduxDemo" component={ReduxDemo} />
        <PrivateRoute
          exact
          path="/test"
          roles={[roles.admin, roles.developer]}
          component={Test}
        />

        <Route path="/errorUnAuthorized" component={ErrorUnAuthorized} />

        {/* nothing match - redirect to error */}
        <Redirect to="/error" />
      </Switch>
      <TokenHandler></TokenHandler>
    </Suspense>
  );
}
