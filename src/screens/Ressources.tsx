import { RessourcesVideo } from "../components/RessourcesVideo"
import { Link } from 'react-router-dom';

export const Ressources = () => {
    return (
        <main>
            <h3 className="font-extrabold mb-5 text-3xl">Ressources de la chaine</h3>
            <p>Mettez vos vidéos ici !</p>
            <div className="ressources-parent-container">
                <RessourcesVideo id="I-HMtBLc7cQ"/>
                <RessourcesVideo id="I-HMtBLc7cQ"/>
                <RessourcesVideo id="I-HMtBLc7cQ"/>
                <RessourcesVideo id="I-HMtBLc7cQ"/>
            </div>
            <div className="mt-2 mb-5">
                <Link to="/formulairevideo">
                    <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded">Ajouter</button>
                </Link>
            </div>
        </main>
    )
}