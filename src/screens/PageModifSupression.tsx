import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

interface Thing {
    _id: string;
    lienvideo: string;
}

export const ObjetsRessources = () => {

    const [thing, setThing] = useState<Thing | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch(`http://localhost:3000/${id}`)
          .then(response => response.json())
          .then(data => setThing(data));
    }, [id]);

    if (!thing) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <main>
            <h3 className="font-extrabold mb-5 text-3xl">Objet</h3>
            <p>Vous avez cliqué sur un objet !</p>
        
        
            {thing && (
            <Link to={`/modify-thing/${thing._id}`}>
                <button type="submit" className="hover:bg-[#717D7E] rounded mr-3">Modifier</button>
            </Link>
            )}
            

            <button type="submit" className="hover:bg-[#717D7E] rounded ml-3" onClick={() => {
            fetch(`http://localhost:3000/thing/${id}`, {
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