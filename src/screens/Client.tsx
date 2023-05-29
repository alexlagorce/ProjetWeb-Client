import { Link } from "react-router-dom";

export const LogoutButton = () => {
    const handleLogout = () => {
      localStorage.removeItem('token');
      // Autres actions de déconnexion si nécessaire
    };
  
    return (
      <Link to="/">
        <button type="submit" className="bg-[#717D7E] py-3 px-3 rounded" onClick={handleLogout}>
          Se déconnecter
        </button>
      </Link>
    );

  };


export const Client = () => {


    return(
        <main>

            <h3 className="font-extrabold mb-5 text-3xl">Bravo, vous êtes désormais connectés !</h3>


            <div className="mt-2 mb-5">
                <LogoutButton />
            </div>
      
        </main>
    )
}