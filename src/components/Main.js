import React from 'react';
import { Switch, Route} from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Home from './Home';
import '../assets/styles/main.css';


const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main;
