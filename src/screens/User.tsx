import { Link } from "react-router-dom"
import React, { useEffect } from 'react';


export const User = () => {

    useEffect(() => {
        // Vérifier si un token est présent dans le localStorage
        const token = localStorage.getItem('token');
        if (token) {
          // Effectuer une action pour se connecter automatiquement (par exemple, rediriger vers la page des commentaires)
          window.location.href = '/client';
        }
      }, []); // Les crochets vides [] en tant que deuxième argument assurent que ce code ne s'exécute qu'une seule fois au chargement du composant
  
    return (

        <section>

            <h3 className="text-3xl font-extrabold mb-10">Crée toi un compte pour pouvoir ajouter des ressources !</h3>  

            <div className="mt-2 mb-5 flex">

            <Link to="/login">
                <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded" style={{marginRight: '10px', fontSize: '1.4rem'}}>Se connecter</button>
            </Link>

            <Link to="/signup">
                <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded" style={{marginLeft: '10px', fontSize: '1.4rem'}}>S'inscrire</button>
            </Link>
            </div>

        </section>
        
    )
}

