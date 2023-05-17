import { RessourcesVideo } from "../components/RessourcesVideo"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { RessourcesPhoto } from "../components/RessourcesPhoto";

interface Thing {
    _id: number;
    lienvideo: String;
}

interface Photo {
    _id: number;
    lienphoto: String;
}

export const Ressources = () => {
    
    const [things, setThings] = useState<Thing[]>([]);
    const [photos, setPhotos] = useState<Photo[]>([]);

    // pour récuperer tout mes objets vidéo
    useEffect(() => {
        fetch('https://web-project-api.cluster-ig3.igpolytech.fr/video')
          .then(response => response.json())
          .then(data => setThings(data));
    }, []);

    // pour récuperer tout mes objets photo
    useEffect(() => {
        fetch('https://web-project-api.cluster-ig3.igpolytech.fr')
          .then(response => response.json())
          .then(data => setPhotos(data));
    }, []);

    return (

        <main style={{ marginBottom: '40px' }}>

            <h3 className="font-extrabold mb-5 text-3xl">Ajoute tes ressources ici !</h3>

            <div className="ressources-container">

        
                
                {things && things.map((thing) => (
                <Link to={`/thing/${thing._id}`}>
                    <RessourcesVideo id={thing.lienvideo} key={thing._id} />
                </Link>
                ))}
        
            </div>

            <div className="mt-2 mb-5">
                <Link to="/formulairevideo">
                    <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded">Ajouter une vidéo</button>
                </Link>
            </div>
        

            <div className="ressources-container mt-5">

                {photos && photos.map((photo) => (
                <Link to={`/photo/${photo._id}`}>
                    <RessourcesPhoto id={photo.lienphoto} key={photo._id} />
                </Link>
                ))}

            </div>

            <div className="mt-2 mb-5">
                <Link to="/formulairephoto">
                    <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded">Ajouter une photo</button>
                </Link>
            </div>
    
        </main>
    )
}