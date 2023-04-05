import { RessourcesVideo } from "../components/YoutubeVideoRessources"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

interface Thing {
    _id: number;
    lienvideo: String;
}

export const Ressources = () => {
    
    const [things, setThings] = useState<Thing[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/')
          .then(response => response.json())
          .then(data => setThings(data));
    }, []);

    return (
        <main>
            <h3 className="font-extrabold mb-5 text-3xl">Ressources de la chaine</h3>
            <p>Mettez vos vidéos ici !</p>
            <div className="ressources-parent-container">
            
                    <RessourcesVideo id="I-HMtBLc7cQ"/>
                    
                    {things.map((thing) => (
                    <Link to={`/thing/${thing._id}`}>
                        <RessourcesVideo id={thing.lienvideo} key={thing._id} />
                    </Link>
                    ))}
        
            </div>
            <div className="mt-2 mb-5">
                <Link to="/formulairevideo">
                    <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded">Ajouter</button>
                </Link>
            </div>
        </main>
    )
}