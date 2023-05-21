import './App.css';
import UserComponent from './Components/UserComponent';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import { AddUser } from './Components/AddUser';

import NoPage from './Components/NoPage';
import UserDetails from './Components/UserDetails';
import EditUser from './Components/EditUser';

import UserComponentt from './Components/UserComponentt';
import { AddUsert } from './Components/AddUsert';

import UserDetailst from './Components/UserDetailst';
import EditUsert from './Components/EditUsert';
import { AppState } from './Context/AppProvider';


function App() {
  const { user, setUser } = AppState();
  const { usert, setUsert } = AppState()

  // const [user, setUser] = useState(data)
  // const [usert, setUsert] = useState(datat)


  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <UserComponent />
        </Route>

        <Route path="/t">
          <UserComponentt />
        </Route>


        <Route path="/adduser">
          <AddUser />
        </Route>

        <Route path="/addusert">
          <AddUsert />
        </Route>


        <Route path="/edit/:id">
          <EditUser />
        </Route>

        <Route path="/editt/:tid">
          <EditUsert />
        </Route>


        <Route path="/user/:id">
          <UserDetails />
        </Route>

        <Route path="/usert/:tid">
          <UserDetailst />
        </Route>


        <Route path="**">
          <NoPage />
        </Route>
      </Switch>


    </div>
  );
}

export default App;

