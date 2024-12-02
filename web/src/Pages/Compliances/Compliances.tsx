import { Route, Switch } from "react-router-dom";
import GstFiling from "./SubPages/Gst/GstFiling";
import It from "./SubPages/It/It";
import Roc from "./SubPages/Roc/Roc";
import Tds from "./SubPages/Tds/Tds";
import Pf from "./SubPages/Pf/Pf";

const Compliances = () => {
  return (
    <section id="compliances">
      <Switch>
        <Route exact path="/compliances/gst-filing" component={GstFiling} />
        <Route exact path="/compliances/tds" component={Tds} />
        <Route exact path="/compliances/roc" component={Roc} />
        <Route exact path="/compliances/itr" component={It} />
        <Route exact path="/compliances/pf" component={Pf} />
      </Switch>
    </section>
  );
};

export default Compliances;
