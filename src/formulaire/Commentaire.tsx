import { useForm, SubmitHandler } from "react-hook-form"


type FormInputs = {
    commentaire: string,
}

export const FormulaireCommentaire = () => {

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {

        try {
          const response = await fetch('https://web-project-api.cluster-ig3.igpolytech.fr/formulairecommentaires', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            console.log('Message envoyé !');
            window.location.href = '/commentaires';
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
                    <label className="block" htmlFor="commentaire">Commentaire</label>
                    <input {...register("commentaire")} className="border" type="text" name="commentaire" id="commentaire" placeholder="Veuillez entrez commentaire :" size={50}/>
                </div>

                <input type="submit" className="block hover:bg-[#717D7E] py-3 px-3 rounded"/>

            </form>
        </main>
    )
}