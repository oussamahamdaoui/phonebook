import './App.scss';
import Home from './pages/Home';
import NewContact from './pages/NewContact';

import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import EditContact from './pages/EditContact';

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
          <Route path='/edit-contact/:contactId'>
            <EditContact></EditContact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
