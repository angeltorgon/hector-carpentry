import React from 'react';
import './App.scss';

// COMPONENTS
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Categories from './views/categories/Categories';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Categories}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
