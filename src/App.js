import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PhotoPage from './components/PhotoPage/PhotoPage';

export default function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Feed}/>
          <Route path="/imagedetail" component={PhotoPage}/>
        </Switch>
      <Footer />
      </Router>
    </>
  )
}
