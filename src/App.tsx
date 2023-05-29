import React from 'react';
import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Client } from './screens/Client';
import { FormulaireCommentaire } from './formulaire/Commentaire';
import { Reseaux } from './screens/Reseaux';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Contact } from './screens/Contact';
import { FormulaireVideo } from './screens/FormulaireVideo';
import { FormulairePhoto } from './screens/FormulairePhoto';
import { ModificationFormulaire } from './screens/ModifFormVideo';
import { ModifVideo } from './screens/ModifVideo';
import { ModifPhoto } from './screens/ModifPhoto';
import { Connexion } from './screens/Connexion';
import { Inscription } from './screens/Inscription';
import { User } from './screens/User';
import { ModificationFormulairePhoto } from './screens/ModifFormPhoto';


function App() {

  return (
    <div className='container mt-10'>
      <header className='head flex justify-between items-center mb-5'>
        <img className="w-40" src="images/piano.jpeg" alt=""/>
        <nav className='flex justify-end'>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br></br>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/reseaux'>About</NavLink><br></br>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/ressources'>Ressources</NavLink><br></br>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/auth'>Compte</NavLink><br></br>
          <NavLink className='mr-3 text-white hover:underline' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/contact'>Contact</NavLink>
          </nav>
      </header>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/ressources' element={ <Ressources/> }/>
        <Route path="/reseaux" element={ <Reseaux/> }/>
        <Route path="/client" element={ <Client/> }/>
        <Route path="/formulairecommentaires" element={ <FormulaireCommentaire/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path="/formulairevideo" element={ <FormulaireVideo/> }/>
        <Route path="/formulairephoto" element={ <FormulairePhoto/> }/>
        <Route path="/modify-thing/:id" element={ <ModificationFormulaire/> }/>
        <Route path="/modify-photo/:id" element={ <ModificationFormulairePhoto/> }/>
        <Route path="/thing/:id" element={ <ModifVideo/> }/>
        <Route path="/photo/:id" element={ <ModifPhoto/> }/>
        <Route path='/auth' element={ <User/> }/>
        <Route path='/signup' element={ <Inscription/> }/>
        <Route path='/login' element={ <Connexion/> }/>
      </Routes>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;