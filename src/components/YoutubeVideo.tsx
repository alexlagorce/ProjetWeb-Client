import '../styles/styles.css';

type VideoProps = {
    id: String
}

export const YoutubeVideo : React.FC<VideoProps> = ({ id }) => {

    let videoTitle = "";
    let videoText = "";

    // titres des vidéos page Acceuil
    if (id === "3w5vsOkd7vg") {
        videoTitle = "'I' - Sofiane Pamart"; //à modifier
    } else if (id === "I-HMtBLc7cQ") {
        videoTitle = "'Factime' - Mister V"; //à modifier
    } else if (id === "J2V99ozwfpU") {
        videoTitle = "'Skyfall' - Adèle";
    } else {
        videoTitle = "Texte par défaut pour les autres vidéos";
    }

     // textes des vidéos page Acceuil
    if (id === "3w5vsOkd7vg") {
        videoText = "Je suis très heureux d'avoir interpréter mon premier morceaux de Sofiane Pamart"; //à modifier
    } else if (id === "I-HMtBLc7cQ") {
        videoText = ""; //à modifier
    } else if (id === "J2V99ozwfpU") {
        videoText = "La première vidéo sur ma chaine Youtube, 'Skyfall' de Adèle"; //à modifier
    } else {
        videoText = "Texte par défaut pour les autres vidéos";
    }

    return (
        <div className="video-container">

            <h3 className='titre'>{videoTitle}</h3>

            <iframe className="video" 
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
            <p className="text">{videoText}</p>
            
        </div> 
    )
}

