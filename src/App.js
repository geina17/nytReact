import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Articles from "./pages/Articles";
// import NoMatch from "./pages/NoMatch";
// import API from "./utils/API";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Articles} />
            {/* <Route exact path="/articles/:id" component={Detail} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;