import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import AllServices from './components/AllServices/AllServices';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Doctors from './components/Doctors/Doctors';
import Blogs from './components/Blogs/Blogs';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Signup from './components/Singup/Signup';
import Signin from './components/Signin/Signin';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Appoinment from './components/Appoinment/Appoinment';
import AppoinmentAlert from './components/AppoinmentAlert/AppoinmentAlert';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <AllServices />
            </Route>
            <PrivateRoute path="/details/:id">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <PrivateRoute path="/blog/:id">
              <BlogDetails />
            </PrivateRoute>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <PrivateRoute path="/appointment">
              <Appoinment />
            </PrivateRoute>
            <PrivateRoute path="/appointment-success">
              <AppoinmentAlert />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
