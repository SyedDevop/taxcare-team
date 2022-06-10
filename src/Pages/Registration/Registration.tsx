
import { Switch, Route, Redirect } from "react-router-dom";
import Esic from "./SubPages/Esic/Esic";
import Gst from "./SubPages/Gst/Gst";
import Tm from "./SubPages/Tm/Tm";

const Registration = () => {
    return (
        <section id="registration">
            <Switch>
                <Route exact path="/registration/gst" component={Gst}/>
                <Route exact path="/registration/tm" component={Tm} />
                <Route exact path="/registration/esic" component={Esic} />
                <Redirect to="/Page-not-Found" />
            </Switch>
        </section>
    )
}

export default Registration
