import { useForm, SubmitHandler } from "react-hook-form"

type FormInputs = {
    email: string,
    password: string
}

export const Inscription = () => {

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {

      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log('Message envoyé !');
          window.location.href = '/login';
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
            <h3 className="font-extrabold mb-5 text-3xl">Inscription</h3>

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label className="block" htmlFor="email">Mail</label>
                    <input {...register("email", {required: true})} className="border" type="email" name="email" id="email" placeholder="Votre email"/>
                    {errors.email && <p className="text-[red]">Email requis</p>}
                </div>

                <div className="mb-3">
                    <label className="block" htmlFor="password">Mot de passe</label>
                    <input {...register("password", {required: true})} className="border" type="password" name="password" id="password" placeholder="Votre mot de passe"/>
                </div>

                <input type="submit" value="S'inscrire" className="block hover:bg-[#717D7E] py-3 px-3 rounded"/>
         
            </form>
        </main>
    )
}