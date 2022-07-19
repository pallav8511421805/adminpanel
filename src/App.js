import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Counterdata from "./containers/Counterdata";
import Medicine from "./containers/Medicine";
import Patient from "./containers/Patient";
import { configstore } from "./Redux/store";

function App() {

  let storedata = configstore();
  
  return (
    <Provider store={storedata}>
    <Switch>
      <Layout>
        <Route path={"/medicine"} exact component={Medicine} />
        <Route path={"/patient"} exact component={Patient} />
        <Route path={"/counte"} exact component={Counterdata} />
      </Layout>
    </Switch>
    </Provider>
  );
}
export default App;
