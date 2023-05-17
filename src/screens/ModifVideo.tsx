//C'est la page lorsque l'on clique sur un objet de type vidéo

import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { RessourcesVideo } from "../components/RessourcesVideo";

const token = localStorage.getItem('token');

interface Thing {
    _id: string;
    lienvideo: string;
}

export const ModifVideo = () => {

    const [thing, setThing] = useState<Thing | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch(`http://localhost:5000/${id}`)
          .then(response => response.json())
          .then(data => setThing(data));
    }, [id]);

    if (!thing) {
        return <div>Chargement en cours...</div>;
    }
    

    return (
        <main>
            <h3 className="font-extrabold mb-5 text-3xl">Vidéo</h3>

            <RessourcesVideo id={thing.lienvideo} key={thing._id}/>

            {thing && (
            <Link to={`/modify-thing/${thing._id}`}>
                <button type="submit" className="hover:bg-[#717D7E] rounded mr-3 mt-3">Modifier</button>
            </Link>
            )}
            

            <button type="submit" className="hover:bg-[#717D7E] rounded ml-3" onClick={() => {
            fetch(`http://localhost:5000/thing/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              }
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