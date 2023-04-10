import React from 'react';
import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Contact } from './screens/Contact';
import { FormulaireVideo } from './screens/FormulaireVideo';
import { FormulairePhoto } from './screens/FormulairePhoto';
import { ModificationFormulaire } from './screens/ModificationFormulaire';
import { ObjetsRessources } from './screens/PageModifSupression';
import { Connexion } from './screens/Connexion';
import { Inscription } from './screens/Inscription';
import { User } from './screens/User';
import { Exclu } from './screens/Exclu';


function App() {

  return (
    <div className='container mt-10'>
      <header className='flex justify-between items-center mb-5 bg-black'>
        <img className="w-40" src="images/piano.jpeg" alt=""/>
        <nav className='flex justify-end'>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br></br>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/ressources'>Ressources</NavLink><br></br>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/auth'>Exclusivité</NavLink>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/contact'>Contact</NavLink>
          </nav>
      </header>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/ressources' element={ <Ressources/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path="/formulairevideo" element={ <FormulaireVideo/> }/>
        <Route path="/formulairephoto" element={ <FormulairePhoto/> }/>
        <Route path="/modify-thing/:id" element={ <ModificationFormulaire/> }/>
        <Route path="/thing/:id" element={ <ObjetsRessources/> }/>
        <Route path='/auth' element={ <User/> }/>
        <Route path='/signup' element={ <Inscription/> }/>
        <Route path='/login' element={ <Connexion/> }/>
        <Route path='/exclu' element={ <Exclu/> }/>
      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;