import './App.css';
import Registration from './pages/authorization/Registration';
import Login from "./pages/authorization/login";
import { Route } from 'react-router-dom';
import Home from "./pages/home/home";
import ManageCourse from './pages/courses/manageCourse';
import CourseList from "./pages/courses/CourseList";
function App() {
  return (
    <div>
      <Route path="/" exact component={Registration} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Home" exact component={Home} />
      <Route path="/Course" exact component={ManageCourse} />
      <Route path="/Courses" exact component={CourseList} />
    </div>
  );
}

export default App;
