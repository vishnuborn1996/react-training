import './App.css';
import Registration from './pages/authorization/Registration';
import Login from "./pages/authorization/login";
import { Route } from 'react-router-dom';
import Home from "./pages/home/home";

function App() {
  return (
    <div>
      <Route path="/" exact component={Registration} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Home" exact component={Home} />
    </div>
  );
}

export default App;
