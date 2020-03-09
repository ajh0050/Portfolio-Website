import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const ROUTING_INFO = {
  title: 'Adam J Hughes',
  headerLinks: [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ],
  home: {
    title: 'Be Relentless!!',
    subTitle: 'Projects the make a difference',
    text: 'Checkout my projects below'
  },
  about: {
    title: 'About Me'
  },
  contact: {
    title: 'Let\'s Talk'
  }
}

const App = () => (

  <Router>
    <Container className="p-0" fluid={true}>

      <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Navbar.Brand>Garrett Love</Navbar.Brand>

        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route path="/" exact render={() => <HomePage title={ROUTING_INFO.home.title} subTitle={ROUTING_INFO.home.subTitle} text={ROUTING_INFO.home.text} />} />
      <Route path="/about" render={() => <AboutPage title={ROUTING_INFO.about.title} />} />
      <Route path="/contact" render={() => <ContactPage title={ROUTING_INFO.contact.title} />} />

      <Footer />

    </Container>
  </Router>
);



export default App;
