import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import  '../style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavbarC = ({recipe,setRecipe}) => {

  const [text, setText] = useState('')

    return (
        <>
  <Navbar collapseOnSelect expand="lg" className="navbar-setup col-lg-11">
    <Container className="p-0">
      <Navbar.Brand href="#home">
        <img src='images/logoForkify.png' width="160" height="45" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <div className="container-navbar-search">
          <input className="rounded-navbar-input" onChange={(inputText) => setText(inputText.target.value)} type="type" placeholder='Search over 1,000,000 recipes...'/>
          <Button className="btn btn-custom" onClick={() => (setRecipe(text))}>
            <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />SEARCH</Button>
        </div>
      <Navbar.Brand className="m-0">
      <Navbar.Text>
        <div className="container-navbar-text d-flex justify-content-around">
          <span><img src='svg/edit.png' className='mb-1 me-2' width="20" height="20" alt="edit icon" />ADD RECIPE</span>
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