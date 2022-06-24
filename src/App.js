import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./components/layout/Layout"; 
import Medicine from "./containers/Medicine";
import Patient from "./containers/Patient";

function App() {

  return (
  <>
  <Switch>
    <Route>
      <Layout exact path="/medi" component={Medicine}/>
      <Layout exact path="/pati" component={Patient} />
    </Route>
   </Switch>
   {/* <Layout/> */}
  </>
  );
}
export default App;
