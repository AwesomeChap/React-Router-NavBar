import React, {Component} from 'react';
import {NavLink, Route, BrowserRouter as Router} from 'react-router-dom';
import './app.scss';

function Home (){
  return (
    <div className="info">This is Home</div>
  );
}

function About (){
  return (
    <div className="info">This is my About section :0</div>
  );
}

function Projects (){
  return (
    <div className="info">A sneak peak of my projects</div>
  );
}

function Contact (){
  return (
    <div className="info">I am available at khalbali@sannata.com</div>
  );
}

export default class App extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="app">
        <div className="heading">
          <div className="bg-box bg2"></div>
          <div className="bg-box bg1"></div> 
          <div className="heading-text">React Router NavBar</div>
        </div>
        
        <Router>
          <div>
            <div className="nav-bar">
              <NavLink className="nav-link" activeClassName="selected" exact to="/">Home</NavLink>
              <NavLink className="nav-link" activeClassName="selected" exact to="/about">About</NavLink>
              <NavLink className="nav-link" activeClassName="selected" exact to="/about/projects">Projects</NavLink>
              <NavLink className="nav-link" activeClassName="selected" exact to="/contact">Contact</NavLink>
            </div>

            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/about/projects" component={Projects}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </div>
        </Router>
      </div>
    );
  }
}