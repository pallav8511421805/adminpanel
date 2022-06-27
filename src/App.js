import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Medicine from "./containers/Medicine";
import Patient from "./containers/Patient";

function App() {
  return (
    <Switch>
      <Layout>
        <Route path={"/medicine"} exact component={Medicine} />
        <Route path={"/patient"} exact component={Patient} />
      </Layout>
    </Switch>
  );
}
export default App;
