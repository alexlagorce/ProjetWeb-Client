import { useForm, SubmitHandler } from "react-hook-form"

type FormInputs = {
    lienvideo: string,
}

export const FormulaireVideo = () => {

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {

        try {
          const response = await fetch('http://localhost:5000/formulairevideo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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