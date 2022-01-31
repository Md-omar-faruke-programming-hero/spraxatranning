import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registation from './Component/Registation/Registation';
import Login from './Component/Login/Login';
import EditMember from './Component/EditMember/EditMember';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute path="/home">
            <Home></Home>
          </PrivateRoute>
          <Route path="/edit/:id">
            <EditMember></EditMember>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
