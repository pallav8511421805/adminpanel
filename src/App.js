
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout"; 
import Medicine from "./containers/Medicine";
import Patient from "./containers/Patient";

function App() {

  return (
  <Switch>
  <Layout/>
  </Switch>
  
    // <Route path={"/medicinepage"} exact component={Medicine}>
  // <Layout/>
  // </Route>
  // <Route>
  //   <Layout path={"/patientpage"} exact component={Patient}/>
  // </Route>
  );
}
export default App;
