import React from 'react'
import NavbarC from './components/navbar'
import ContainerC from './components/container'

import { useState } from 'react'
import './App.css';

function App() {

  const [recipe, setRecipe] = useState('')

  return (
    <>
    <div className='row d-flex justify-content-center pt-5 pb-5'>
    <NavbarC recipe={recipe} setRecipe={setRecipe}></NavbarC>
    <ContainerC recipe={recipe} setRecipe={setRecipe}></ContainerC>
    </div>
    </>
  );
}

export default App;
