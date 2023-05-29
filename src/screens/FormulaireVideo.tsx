import { useForm, SubmitHandler } from "react-hook-form"

type FormInputs = {
    lienvideo: string,
}

export const FormulaireVideo = () => {

    const token = localStorage.getItem('token');

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {

        try {
          //production
          //'https://web-project-api.cluster-ig3.igpolytech.fr/formulairevideo'
          //developpement
          //'http://localhost:5000/formulairevideo'
          const response = await fetch('https://web-project-api.cluster-ig3.igpolytech.fr/formulairevideo', {
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
                    <label className="block" htmlFor="lienvideo">Lien de votre vidéo</label>
                    <input {...register("lienvideo")} className="border" type="text" name="lienvideo" id="lienvideo" placeholder="Veuillez entrez le lien de votre vidéo :" size={50}/>
                </div>

                <input type="submit" className="block hover:bg-[#717D7E] py-3 px-3 rounded"/>

            </form>
        </main>
    )
}