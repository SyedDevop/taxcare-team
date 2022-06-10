import { Switch, Route, Redirect } from "react-router-dom";
import Plc from "./SubPages/Plc/Plc";
import Opc from "./SubPages/Opc/Opc";
import Llp from "./SubPages/Llp/Llp";

const StartBusiness = () => {
  return (
    <section id="startBusiness">
      <Switch>
        <Route exact path="/startBusiness/plc" component={Plc} />
        <Route exact path="/startBusiness/opc" component={Opc} />
        <Route exact path="/startBusiness/llp" component={Llp} />
        <Redirect to="/Page-not-Found" />
      </Switch>
    </section>
  );
};

export default StartBusiness;
