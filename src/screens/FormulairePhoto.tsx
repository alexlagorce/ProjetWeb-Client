import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react";

type FormInputs = {
    lienphoto: string,
}

export const FormulairePhoto = () => {

    const token = localStorage.getItem('token');
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {

        try {
          //production
          //`https://web-project-api.cluster-ig3.igpolytech.fr/formulairephoto`
          //developpement
          //`http://localhost:5000/formulairephoto`
          const response = await fetch(`https://web-project-api.cluster-ig3.igpolytech.fr/formulairephoto`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            console.log('Message envoyé !');
            window.location.href = '/ressources';
          } else {
            console.log('Erreur lors de l\'envoi du message');
            setErrorMessage("Vous devez avoir un compte pour ajouter une ressource");
          }
        } catch (error) {
          console.log(error);
        }
  
      };
  
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    return (
        <main>

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label className="block" htmlFor="lienphoto">Lien de votre photo</label>
                    <input {...register("lienphoto")} className="border" type="text" name="lienphoto" id="lienphoto" placeholder="Veuillez entrez le lien de votre photo :" size={50}/>
                </div>

                <input type="submit" className="block hover:bg-[#717D7E] py-3 px-3 rounded"/>

            </form>

            <div className="error-message">
                {errorMessage && <p>{errorMessage}</p>}
            </div>

        </main>
    )
}