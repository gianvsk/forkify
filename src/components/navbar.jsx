import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/style.css'
import MyComponent from './popover'

const NavbarC = ({ setSearchText, setPage, bookmarkRecipes, setRecipeId }) => {

  const [text, setText] = useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className='p-0'>
        <Navbar collapseOnSelect expand="lg" className="navbar-setup d-flex justify-content-around justify-content-sm-around align-items-sm-center flex-xl-row col-12 p-0">
          <Navbar.Brand href="#home">
            <img src='images/logoForkify.png' className='logo-navbar' width="160" height="45" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav me-4" />
          <Navbar.Brand className='navbar-brand-container'>
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className='navbar-div-collapse d-flex flex-sm-column justify-content-sm-start flex-xl-row justify-content-xl-around mt-sm-2'>
                <div className="container-navbar-search mx-2">
                  <input className="rounded-navbar-input mb-2" onChange={(inputText) => setText(inputText.target.value)} type="type" placeholder='Search over 1,000,000 recipes...' />
                  <Button className="btn btn__custom" onClick={() => ([setSearchText(text),setPage(1)])}>
                    <img src='svg/search.png' className="icon-search" alt='search-icon'/>SEARCH</Button>
                </div>
                <Navbar.Text className='d-flex align-items-center p-0'>
                  <div className="container-navbar-text d-flex flex-row justify-content-center">
                    <button className='container-navbar-text__button d-flex align-items-center' onClick={handleShow}><img src='svg/edit.png' className='mb-1' width="30" height="30" alt="edit icon" />ADD RECIPE</button>

                    <MyComponent bookmarkRecipes={bookmarkRecipes} setRecipeId={setRecipeId} />

                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                      </Modal.Header>
                      <Modal.Body className='row'>
                        <div className='col-12 col-lg-6  d-flex flex-column justify-content-center align-items-center'>
                          <h2>RECIPE DATA</h2>
                          <form className=' form-recipe d-flex justify-content-center align-items-start row'>
                            <div className='m-3'><label className='col-lg-6'>Title</label><input type="text" className="col-lg-6" placeholder='TEST23' /></div>
                            <div className='m-3'><label className='col-lg-6'>URL</label><input type="text" className='col-lg-6' placeholder='TEST23' /></div>
                            <div className='m-3'><label className='col-lg-6'>Image URL</label><input type="text" className='col-lg-6' placeholder='TEST23' /></div>
                            <div className='m-3'><label className='col-lg-6'>Publisher</label><input type="text" className='col-lg-6' placeholder='TEST23' /></div>
                            <div className='m-3'><label className='col-lg-6'>Prep time</label><input type="text" className='col-lg-6' placeholder='TEST23' /></div>
                            <div className='m-3'><label className='col-lg-6'>Servings</label><input type="text" className='col-lg-6' placeholder='TEST23' /></div>
                          </form>
                        </div>
                        <div className='col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                          <h2>INGREDIENTS</h2>
                          <form className=' form-recipe d-flex justify-content-center align-items-start row'>
                            <div className='m-3'><label className='col-lg-6'>Title</label><input type="text" className="col-lg-6" placeholder='TEST23' /></div>
                            <div className='m-3'><label className='col-lg-6'>URL</label><input type="text" className='col-lg-6' placeholder='TEST23' /></div>
                            <div className='m-3'><label className='col-lg-6'>Image URL</label><input type="text" className='col-lg-6' placeholder='TEST23' /></div>
                            <div className='m-3'><label className='col-lg-6'>Publisher</label><input type="text" className='col-lg-6' /></div>
                            <div className='m-3'><label className='col-lg-6'>Prep time</label><input type="text" className='col-lg-6' /></div>
                            <div className='m-3'><label className='col-lg-6'>Servings</label><input type="text" className='col-lg-6' /></div>
                          </form>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <button className='btn' variant="secondary" onClick={handleClose}>
                          Close
                        </button>
                        <button className='btn' variant="primary" onClick={handleClose}>
                          Save Changes
                        </button>
                      </Modal.Footer>
                    </Modal>

                  </div>
                </Navbar.Text>
              </div>
            </Navbar.Collapse>
          </Navbar.Brand>
        </Navbar>
      </header>
    </>
  );

}

export default NavbarC;