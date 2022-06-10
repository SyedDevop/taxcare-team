import { Route, Switch } from "react-router-dom";
import Establishment from "./SubPages/Establishment/Establishment";
import Fssai from "./SubPages/Fssai/Fssai";
import ImportExport from "./SubPages/ImportExport/ImportExport";
import Msme from "./SubPages/Msme/Msme";

const License = () => {
  return (
    <section id="licenses">
      <Switch>
        <Route exact path="/license/fssai" component={Fssai} />
        <Route
          exact
          path="/license/import-export-code"
          component={ImportExport}
        />
        <Route
          exact
          path="/license/shop-establishment"
          component={Establishment}
        />
        <Route exact path="/license/msme-certificate" component={Msme} />
      </Switch>
    </section>
  );
};

export default License;
