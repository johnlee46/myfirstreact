import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'John Lee',
      headerLinks:[
          {title: 'Home', path:'/home'},
          {title: 'About', path:'/about'},
          {title: 'Contact', path:'/contact'}
        
      ],
      home: {
        title: 'Portfolio',
        subTitle: 'Projects',
        text: 'Description of projects'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Send me a message',
      }

    }
  }
  render(){
    return (
      <Router basename='/'>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>John Lee</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
            
          </Navbar>
          <Route path="/home" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer />

        </Container>
      </Router>
    )
  }
}

export default App;
