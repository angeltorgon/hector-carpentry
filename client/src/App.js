import React from 'react';
import './App.scss';

// COMPONENTS
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './views/home/Home';

function App() {
  return (
    <div id="top" className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
