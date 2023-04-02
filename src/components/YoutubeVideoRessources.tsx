import { Link } from "react-router-dom"

type VideoProps = {
    id: String
}

export const RessourcesVideo : React.FC<VideoProps> = ({ id }) => {

    return (
        <main>
            <ul>

                <div className="ressources-container">

                    <iframe className="video" width="560" height="315" 
                    src={"https://www.youtube.com/embed/" +id}
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    <div className="bg-black">

                        <Link to="/modify-formulaire/:id">
                            <button type="submit" className="hover:bg-[#717D7E] rounded mr-3">Modifier</button>
                        </Link>

                        <button type="submit" className="hover:bg-[#717D7E] rounded ml-3">Supprimer</button>

                    </div>

                </div>

            </ul>
        </main>
    )
}