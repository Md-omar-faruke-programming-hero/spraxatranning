import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registation from './Component/Registation/Registation';
import Login from './Component/Login/Login';
import EditMember from './Component/EditMember/EditMember';



function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/signup">
            <Registation></Registation>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route path="/edit/:id">
            <EditMember></EditMember>
          </Route>
        </Switch>
      </BrowserRouter>
 
  );
}

export default App;
