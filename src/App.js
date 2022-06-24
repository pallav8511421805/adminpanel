import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout"; 
import Medicine from "./containers/Medicine";
import Patient from "./containers/Patient";

function App() {

  return (
    <Switch>
      <Route>
        <Layout path={"/medi"} exact component={Medicine}/>
        <Layout path={"/pati"} exact component={Patient}/>
      </Route>
    </Switch>
  );
}
export default App;
