import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

interface Commentaire {
    _id: number;
    commentaire: String;
}

export const Commentaire = () => {

    const [commentaires, setCommentaires] = useState<Commentaire[]>([]);

    useEffect(() => {
        fetch('https://web-project-api.cluster-ig3.igpolytech.fr/commentaires')
            .then(response => {
                console.log(response); // Affiche la réponse dans la console
                return response.json();
            })
            .then(data => {
                console.log(data);
                setCommentaires(data);
            })
    }, []);
    
    return(
        <main>

            <h3 className="font-extrabold mb-5 text-3xl">Commentaires</h3>

            <div className="mt-2 mb-5">
                <Link to="/formulairecommentaires">
                    <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded">Ajouter un commentaire</button>
                </Link>
            </div>

            <div style={{ 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left"
            }}>
            {commentaires && commentaires.map(commentaire => (
            <div 
            key={commentaire._id} 
            style={{
                backgroundColor: "#F5F5F5",
                border: "1px solid #E0E0E0",
                borderRadius: "5px",
                padding: "10px",
                margin: "10px",
                width: "50%",
                textAlign: "center"
            }}
            >
            {commentaire.commentaire}
        </div>
    ))}
</div>

        </main>
    )
}