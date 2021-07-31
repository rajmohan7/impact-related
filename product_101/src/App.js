import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RootComponent from "./components/RootComponent";
import IntroductionComponent from "./components/IntroductionComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={RootComponent} />
          <Route exact path="/introduction" component={IntroductionComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
