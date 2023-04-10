type PhotoProps = {
    id: String;
}


export const RessourcesPhoto : React.FC<PhotoProps> = ({ id }) => {

    return (
         
        <main>
            <div className="ressources-container">
                
                <img src={""+id}
                alt="" />

            </div>
        </main>

    )

}