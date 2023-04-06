import { Link } from "react-router-dom"

export const User = () => {

    return (
    
        <div className="mt-2 mb-5">
            <Link to="/login">
                <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded " style={{marginRight: '10px'}}>Se connecter</button>
            </Link>

            <Link to="/signup">
                <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded" style={{marginLeft: '10px'}}>S'inscrire</button>
            </Link>
        </div>
       
    )
}
