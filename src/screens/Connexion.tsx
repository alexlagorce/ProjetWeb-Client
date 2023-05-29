import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

type FormInputs = {
    email: string,
    password: string
}

export const Connexion = () => {

    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {

      //production
      //'https://web-project-api.cluster-ig3.igpolytech.fr/login'
      //developpement 
      //'http://localhost:5000/login'
      try {
        const response = await fetch('https://web-project-api.cluster-ig3.igpolytech.fr/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log('Message envoyé !');
          //L'utilisateur obtient un token que l'on stocke dans localStorage
          const data = await response.json();
          localStorage.setItem('token', data.token);      
          window.location.href = '/client';
        } else {
          console.log('Erreur lors de l\'envoi du message');
          setErrorMessage('Identifiant ou mot de passe incorrect, veuillez réessayer');
        }
      } catch (error) {
        console.log(error);
      }

    };

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()


    return (
        <main>
            <h3 className="font-extrabold mb-5 text-3xl">Connexion</h3>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

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

                <input type="submit" value="Se connecter" className="block hover:bg-[#717D7E] py-3 px-3 rounded"/>
         
            </form>
        </main>
    )
}
    