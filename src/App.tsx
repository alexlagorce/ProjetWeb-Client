import React from 'react';
import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Contact } from './screens/Contact';
import { FormulaireVideo } from './screens/FormulaireVideo';
import { ModificationFormulaire } from './screens/ModificationFormulaire';

function App() {
  return (
    <div className='container mt-10'>
      <header className='flex justify-between items-center mb-5 bg-black'>
        <img className="w-40" src="images/piano.jpeg" alt=""/>
        <nav className='flex justify-end'>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br></br>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/ressources'>Ressources</NavLink><br></br>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/contact'>Contact</NavLink>
          </nav>
      </header>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/ressources' element={ <Ressources/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path="/formulairevideo" element={ <FormulaireVideo/> }/>
        <Route path="/modify-formulaire/:id" element={ <ModificationFormulaire id="642978588b6b9dc87ec70279"/> }/>
      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;