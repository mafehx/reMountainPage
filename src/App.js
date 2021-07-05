import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SeePlaces from "./pages/SeePlaces";
import AddPlace from "./pages/AddPlace";
import About from "./pages/About";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SeePlaces} />
        <Route exact path="/addPlace" component={AddPlace} />
        <Route exact path="/about" component={About} />
      </Switch>
      <NotificationContainer />
    </div>
  );
}

export default App;
