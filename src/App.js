import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Header></Header>

      <Switch>

      <Route exact path='/'>

      <Home></Home>

      </Route>

      <Route exact path='/home'>

      <Home></Home>

      </Route>

      <Route path='/services'>

      <Services></Services>

      </Route>

      <Route path='/aboutUs'>

      <AboutUs></AboutUs>

      </Route>

      <Route path='/contactUs'>

      <ContactUs></ContactUs>

      </Route>

      <Route path='*'>

      <NotFound></NotFound>

      </Route>

      </Switch>

      <Footer></Footer>

      </BrowserRouter>

    </div>
  );
}

export default App;
