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
        fetch('http://localhost:3000/video/')
          .then(response => response.json())
          .then(data => setThings(data));
    }, []);

    // pour récuperer tout mes objets photo
    useEffect(() => {
        fetch('http://localhost:3000/')
          .then(response => response.json())
          .then(data => setPhotos(data));
    }, []);

    return (

        <main style={{ marginBottom: '40px' }}>

            <h3 className="font-extrabold mb-5 text-3xl">Ressources de la chaine</h3>
            <p>Mettez vos vidéos ici !</p>

            <div className="ressources-parent-container">
            
                <RessourcesVideo id="3w5vsOkd7vg"/>
                    
                {things.map((thing) => (
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
            
            <p>Mettez vos photos ici !</p>

            <div className="ressources-parent-container">

                <RessourcesPhoto id="https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_1280.jpg"/>
                <RessourcesPhoto id="https://cdn.pixabay.com/photo/2017/10/03/12/50/northern-lights-2812374_960_720.jpg"/>

                {photos.map((photo) => (
               
                    <RessourcesPhoto id={photo.lienphoto} key={photo._id} />
             
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