import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type FormInputs = {
  lienphoto: string;
};

export const ModificationFormulairePhoto: React.FC = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormInputs>();
  const [thing, setThing] = useState(null);
  const { id } = useParams<{ id: string }>();


  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const response = await fetch(`https://web-project-api.cluster-ig3.igpolytech.fr/modify-photo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        window.location.href = '/ressources';
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
        const response = await fetch(`https://web-project-api.cluster-ig3.igpolytech.fr/`);
        if (response.ok) {
          const data = await response.json();
          setThing(data);
          setValue('lienphoto', data.lienvideo); // Définir la valeur initiale pour l'input de lienvideo
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
            <label className="block" htmlFor="lienphoto">Lien de votre photo</label>
            <input {...register("lienphoto")} className="border" type="text" name="lienphoto" id="lienphoto" placeholder="Veuillez entrez le lien de votre photo :" size={50}/>
        </div>

        <input type="submit" className="block hover:bg-[#717D7E] py-3 px-3 rounded"/>

    </form>

    </main>
  );
};