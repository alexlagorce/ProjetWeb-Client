import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


type FormInputs = {
  lienvideo: string;
};

export const ModificationFormulaire: React.FC = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormInputs>();
  const [thing, setThing] = useState(null);
  const { id } = useParams<{ id: string }>();

  const token = localStorage.getItem('token');
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      //production
      //`https://web-project-api.cluster-ig3.igpolytech.fr/modify-thing/${id}`
      //developpement
      //`http://localhost:5000/modify-thing/${id}`
      const response = await fetch(`https://web-project-api.cluster-ig3.igpolytech.fr/modify-thing/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        window.location.href = '/ressources';
        console.log('Objet modifié !');
      
      } else {
        console.log('Erreur lors de la modification de l\'objet');
        setErrorMessage("Vous devez avoir un compte pour modifier une ressource");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchThing = async () => {
      try {
        //production
        //`https://web-project-api.cluster-ig3.igpolytech.fr`
        //developpement
        //`http://localhost:5000`
        const response = await fetch(`https://web-project-api.cluster-ig3.igpolytech.fr`);
        if (response.ok) {
          const data = await response.json();
          setThing(data);
          setValue('lienvideo', data.lienvideo); // Définir la valeur initiale pour l'input de lienvideo
        } else {
          console.log('Erreur lors de la récupération de l\'objet');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchThing();
  }, [id, setValue]);

  if (!thing) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="block" htmlFor="lienvideo">
            Lien de votre vidéo
          </label>
          <input {...register("lienvideo")} className="border" type="text" name="lienvideo" id="lienvideo" placeholder="Veuillez entrez le lien de votre vidéo :" size={50}/>
        </div>

        <input type="submit" className="block hover:bg-[#717D7E] py-3 px-3 rounded"/>

      </form>

      <div className="error-message">
        {errorMessage && <p>{errorMessage}</p>}
        </div>
    </main>
  );
};