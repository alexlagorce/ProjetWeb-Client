import { useForm, SubmitHandler } from "react-hook-form"

type FormInputs = {
    subject: string,
    email: string,
    message: string
}

export const Contact = () => {

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {

      try {
        const response = await fetch('http://web-project-api.cluster-ig3.igpolytech.fr/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log('Message envoyé !');
          //window.location.href = '/';
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
            <h3 className="font-extrabold mb-5 text-3xl">Contact</h3>

            <p>Email: lagorce.alexandre@gmail.com</p>

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label className="block" htmlFor="subject">Sujet du mail</label>
                    <input {...register("subject")} className="border" type="text" name="subject" id="subject" placeholder="Quel est le sujet ?"/>
                </div>

                <div className="mb-3">
                    <label className="block" htmlFor="email">Mail</label>
                    <input {...register("email", {required: true})} className="border" type="email" name="email" id="email" placeholder="Votre email"/>
                    {errors.email && <p className="text-[red]">Email requis</p>}
                </div>

                <div className="mb-3">
                    <label className="block" htmlFor="message">Message</label>
                    <textarea {...register("message")} rows={5} className="border resize-none" name="message" id="message" placeholder="Votre message"/>
                </div>

                <input type="submit" className="block hover:bg-[#717D7E] py-3 px-3 rounded"/>
         
            </form>
        </main>
    )
}
    