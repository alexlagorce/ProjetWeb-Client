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

    // on ecupere les objets de la base
    useEffect(() => {
        fetch(`http://web-project-api.cluster-ig3.igpolytech.fr/photo/${id}`)
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
            fetch(`http://web-project-api.cluster-ig3.igpolytech.fr/photo/${id}`, {
            method: "DELETE",
            })
            .then(response => {
            if (response.ok) {
                // Si la suppression réussit, redirigez l'utilisateur vers une autre page.
                window.location.href = '/ressources';
            } else {
                // Si la suppression échoue, affichez un message d'erreur à l'utilisateur.
                console.log("Une erreur est survenue lors de la suppression.");
            }
            })
            .catch(error => {
            console.log("Une erreur est survenue lors de la suppression:", error);
            });
            }}>Supprimer</button>


        </main>
    )
}