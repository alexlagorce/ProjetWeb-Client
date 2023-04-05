import '../styles/styles.css';

type VideoProps = {
    id: String
}

export const YoutubeVideo : React.FC<VideoProps> = ({ id }) => {

    let videoTitle = "";
    let videoText = "";

    if (id === "3w5vsOkd7vg") {
        videoTitle = "Ma dernière vidéo"; //à modifier
    } else if (id === "zXn4cVgX5wQ") {
        videoTitle = "Vidéo spécial covid"; //à modifier
    } else {
        videoTitle = "Texte par défaut pour les autres vidéos";
    }

    if (id === "I-HMtBLc7cQ") {
        videoText = "Texte pour la vidéo 1"; //à modifier
    } else if (id === "zXn4cVgX5wQ") {
        videoText = "Texte pour la vidéo 2"; //à modifier
    } else {
        videoText = "Texte par défaut pour les autres vidéos";
    }

    return (
        <div className="video-container">
            <h3 className='titre'>{videoTitle}</h3>

            <iframe className="video" width="560" height="315" 
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
            <p className="text">{videoText}</p>
        </div> 
    )
}

