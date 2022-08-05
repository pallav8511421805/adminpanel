import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./components/layout/Layout";
import Counterdata from "./containers/Counterdata";
import Doctor from "./containers/Doctor";
import Medicine from "./containers/Medicine";
import Memoexple from "./containers/Memoexple";
import Patient from "./containers/Patient";
import PromiseExmple from "./containers/PromiseExmple";
import { configstore } from "./Redux/store";

function App() {

  let {store,persistor} = configstore();
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Switch>
      <Layout>
        <Route path={"/medicine"} exact component={Medicine} />
        <Route path={"/patient"} exact component={Patient} />
        <Route path={"/counte"} exact component={Counterdata} />
        <Route path={"/doctor"} exact component={Doctor} />
        <Route path={"/promiseex"} exact component={PromiseExmple} />
        <Route path={"/usememoexple"} exact component={Memoexple} />
    
      </Layout>
    </Switch>
    </PersistGate>
    </Provider>
    
  );
}
export default App;
