import './App.css';
import Registration from './pages/authorization/Registration';
import Login from "./pages/authorization/login";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" exact component={Registration} />;
      <Route path="/Login" exact component={Login} />;
    </div>
  );
}

export default App;
