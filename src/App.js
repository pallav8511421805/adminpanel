import { Switch } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Switch>
      <Layout path={"/medi"} exact/>
      </Switch>
  );
}

export default App;
