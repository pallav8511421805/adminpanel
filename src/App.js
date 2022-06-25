
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout"; 
import Medicine from "./containers/Medicine";
import Patient from "./containers/Patient";

function App() {

  return (
  <Switch>
  <Route>
  <Layout path={"/medicinepage"} exact component={Medicine}/>
  </Route>
  <Route>
  <Layout path={Children} exact component={Patient}/>
  </Route>
  </Switch>
  );
}
export default App;
