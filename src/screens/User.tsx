import { Link } from "react-router-dom"

export const User = () => {

    return (

        <section>

            <h3 className="text-3xl font-extrabold mb-10">Crée toi un compte pour pouvoir ajouter des commentaires !</h3>  

            <div className="mt-2 mb-5 flex">

            <Link to="/login">
                <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded" style={{marginRight: '10px', fontSize: '1.4rem'}}>Se connecter</button>
            </Link>

            <Link to="/signup">
                <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded" style={{marginLeft: '10px', fontSize: '1.4rem'}}>S'inscrire</button>
            </Link>
            </div>

        </section>
        
    )
}
