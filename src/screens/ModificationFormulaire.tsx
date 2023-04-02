import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type FormInputs = {
  lienvideo: string;
};

type ThingProps = {
  id: string;
};

export const ModificationFormulaire: React.FC<ThingProps> = ({ id }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormInputs>();
  const [thing, setThing] = useState(null);
  const { id: videoId } = useParams<{ id: string }>();
 

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const response = await fetch(`http://localhost:3000/modify-formulaire/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Objet modifié !');
      
      } else {
        console.log('Erreur lors de la modification de l\'objet');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchThing = async () => {
      try {
        const response = await fetch(`http://localhost:3000/`);
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
    </main>
  );
};