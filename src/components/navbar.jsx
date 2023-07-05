import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import style from '../style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavbarC = ({recipe,setRecipe}) => {

  const [text, setText] = useState('')

    return (
        <>
  <Navbar collapseOnSelect expand="lg" className="navbar-setup col-lg-10">
    <Container>
      <Navbar.Brand href="#home">
        <img src='images/logoForkify.png' width="160" height="45" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Navbar.Brand>
      <div className="container-navbar-search">
          <input className="rounded-navbar-input" onChange={(inputText) => setText(inputText.target.value)} type="type" placeholder='Search over 1,000,000 recipes...'/>
          <Button className="btn btn-custom" onClick={() => (setRecipe(text), console.log("Sto cambiando recipe", recipe))}>
            <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />SEARCH</Button>
        </div>
      </Navbar.Brand>
      <Navbar.Brand>
      <Navbar.Text>
        <div className="container-navbar-text d-flex justify-content-around">
          <span>ADD RECIPE</span>
          <span><FontAwesomeIcon className="icon-bookmark" icon={faBookmark} />BOOKMARKS</span>
        </div>
      </Navbar.Text>
      </Navbar.Brand>
  </Navbar.Collapse>
</Container>
</Navbar>
</>
);

    }

export default NavbarC;