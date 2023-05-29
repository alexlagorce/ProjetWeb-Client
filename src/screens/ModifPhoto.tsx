//C'est la page lorsque l'on clique sur un objet de type photo

import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { RessourcesPhoto } from "../components/RessourcesPhoto";

interface Thing {
    _id: string;
    lienphoto: string;
}

export const ModifPhoto = () => {

    const [thing, setThing] = useState<Thing | null>(null);
    const { id } = useParams<{ id: string }>();

    const token = localStorage.getItem('token');

    const [errorMessage, setErrorMessage] = useState("");

    // on ecupere les objets de la base
    //'http://localhost:5000/photo/${id}'
    //`https://web-project-api.cluster-ig3.igpolytech.fr/photo/${id}`
    useEffect(() => {
        fetch(`https://web-project-api.cluster-ig3.igpolytech.fr/photo/${id}`)
          .then(response => response.json())
          .then(data => setThing(data));
    }, [id]);

    if (!thing) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <main>
            <h3 className="font-extrabold mb-5 text-3xl">Photo</h3>
    
            <RessourcesPhoto id={thing.lienphoto}/>
        
            {thing && (
            <Link to={`/modify-photo/${thing._id}`}>
                <button type="submit" className="hover:bg-[#717D7E] rounded mr-3 mt-3">Modifier</button>
            </Link>
            )}
            
            <button type="submit" className="hover:bg-[#717D7E] rounded ml-3" onClick={() => {
            //'http://localhost:5000/photo/${id}'
            //`https://web-project-api.cluster-ig3.igpolytech.fr/photo/${id}` 
            fetch(`https://web-project-api.cluster-ig3.igpolytech.fr/photo/${id}` , {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
              },
            })
            .then(response => {
            if (response.ok) {
                // Si la suppression réussit, redirigez l'utilisateur vers une autre page.
                window.location.href = '/ressources';
            } else {
                // Si la suppression échoue, affichez un message d'erreur à l'utilisateur.
                console.log("Une erreur est survenue lors de la suppression.");
                setErrorMessage("Vous devez avoir un compte pour supprimer une ressource");
            }
            })
            .catch(error => {
            console.log("Une erreur est survenue lors de la suppression:", error);
            });
            }}>Supprimer</button>

            <div className="error-message">
                {errorMessage && <p>{errorMessage}</p>}
            </div>
            


        </main>
    )
}