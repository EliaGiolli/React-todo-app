import Button from "../components/Button"
import InputField from "../components/InputField"

//External libraries
import {Element} from 'react-scroll'
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'

function Contacts() {

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data)=>{
    emailjs.send(
      "service_7ek4lq7",
      "template_xgb6npq",
      data,
      "if_tQaahf33HEGnJF"
    )
    .then(()=>{
      console.log("email inviata con successo!");
      reset()
    })
    .catch((err)=>console.error("errore nell'invio della mail",err))
  }

  return (
    <>
      <Element name="contacts" className="my-20">
        <form action="POST" onSubmit={handleSubmit(onSubmit)} className="form-contacts" id="form-id">
          <div className="flex justify-center items-center text-center gap-4 w-full p-4">
            <h2 className="subtitle border-b-white border-b-1">Contattami!</h2>
          </div>
          <div className="p-6">
            <h3 className="subtitle-secondary">Inserisci nome e email</h3>
            <div className="flex flex-col items-center text-white gap-4 p-6">
              <label htmlFor="name" className="mt-5">Inserisci il tuo nome </label>
              <InputField 
                type="text"
                {...register("nome",
                  {required:"il campo è obbligatorio",
                    minLength: {value: 3, message:"nome utente troppo corto"},
                    maxLength: 10
                })} 
                placeholder="inserisci il tuo nome" 
                className="form-input"
              />
              {errors.nome && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.nome.message}</p>}
              <label htmlFor="email">Inserisci la tua email </label>
              <InputField
                {...register("email",
                  {required:"il campo è obbligatorio",
                    minLength:3,
                    pattern:{
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Inserisci un'email valida"
                    }
                  })} 
                placeholder="inserisci la tua email" 
                className="form-input"
                />
                {errors.email && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.email.message}</p>}
            </div>
          </div>
          <p className="paragraph">I tuoi dati verranno trattati secondo le norme della privacy</p>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <div className="flex gap-3">
              <InputField type="checkbox" {...register("privacy", { required: "Devi accettare la privacy" })} />
              <label>Accetta la nostra privacy</label>
            </div>
            {errors.privacy && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.privacy.message}</p>}
            <Button
              disable={isSubmitting}
              type="submit" 
              className="custom-button"
              > 
              Contattami!
            </Button>
          </div>
        </form>
      </Element>     
    
    </>
  )
}

export default Contacts