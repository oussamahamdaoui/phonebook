import './App.scss';
import Home from './pages/Home';
import NewContact from './pages/NewContact';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/new-contact">
            <NewContact></NewContact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
