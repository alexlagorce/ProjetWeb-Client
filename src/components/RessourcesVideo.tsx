import { Link } from "react-router-dom"

type VideoProps = {
    id: string;
}

//fonction pour extraire uniquement la valeur du paramètre 'v' dans les lien vidéo youtube
function extractVideoId(url: string) {
    try {
        const parsedUrl = new URL(url);
        const videoId = parsedUrl.searchParams.get('v');
        return videoId;
    } catch (err) {
        console.error('Invalid URL', err);
        return null;
    }
}

export const RessourcesVideo : React.FC<VideoProps> = ({ id }) => {

    const videoId = extractVideoId(id);

    return (
        <main>
            <ul>

                <div className="ressources-video">

                    <iframe className="video" width="560" height="315" 
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>

            </ul>
        </main>
    )
}