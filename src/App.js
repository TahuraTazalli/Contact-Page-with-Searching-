import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Container/MainPage";
import MoreDetails from "./Container/MoreDetails";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/moredetails/:userId" component={MoreDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
