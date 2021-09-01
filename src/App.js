import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return <>
    <Navbar />
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} />
      <Route path='/service' component={Service} />
      <Route path='/contact' component={Contact} />
      <Redirect to='/' />
    </Switch>
    <Footer />
  </>;
}

export default App;