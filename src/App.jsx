import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import CardWidget from './components/CardWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'

function App() {

  return (
    <>
    <div className='carrito'>
   <CardWidget />
   </div> 0
    <div className='caja'>
    <div className='titulo'>
   <h1 >Mi Tienda</h1>
   </div>

   ---------------------------------------
   <header>
   <NavBar />
    </header>
    </div>
    
    </>
  )
}

export default App
