
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout"; 
import Medicine from "./containers/Medicine";
import Patient from "./containers/Patient";

function App() {

  return (
  <Switch>
  <Route path={"/medicinepage"} exact>
  <Layout component={Medicine}/>
  </Route>
  <Route path={"/patientpage"} exact>
  <Layout component={Patient}/>
  </Route>
  </Switch>
  );
}
export default App;
