import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RootComponent from "./components/RootComponent";
import IntroductionComponent from "./components/IntroductionComponent";
import ToolsRequiredComponent from "./components/ToolsRequiredComponent";
import ConclusionComponent from "./components/ConclusionComponent";
import SprintComponent from "./components/SprintComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={RootComponent} />
          <Route exact path="/introduction" component={IntroductionComponent} />
          <Route
            exact
            path="/toolsRequired"
            component={ToolsRequiredComponent}
          />
          <Route exact path="/sprint" component={SprintComponent} />
          <Route exact path="/conclusion" component={ConclusionComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
