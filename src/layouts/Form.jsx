import React from 'react';
import Input from '../components/Input'
import Button from '../components/Button'

//REACT ICONS
import { MdSubscriptions } from "react-icons/md";

//THEME
import { useTheme } from '../contexts/ThemeContext';

//EXTERNAL LIBRARIES
import { useForm } from 'react-hook-form';
//internal imports
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useTimedMessage } from '../hooks/useTimedMessage';
import { useFocus } from '../hooks/useFocus';

function Form() {
  //Ref
  const [inputRef, setFocus] = useFocus();
  //theme change
  const {themeMode} = useTheme();

  //trigger of the message
  const [visible,triggerMessage] = useTimedMessage(3000);

  //react hook form logic
  const {
    register,
    handleSubmit,
    formState: {errors,isSubmitting},
    watch,
    reset
  } = useForm({
    defaultValues:{
      nome:"",
      email:"",
    },
  });
  useLocalStorage({watch, reset, key:"my custom key"});


  const onSubmit = (data)=>{
    console.log("dati inviati",data);
    localStorage.removeItem(key);
    triggerMessage();
  }

  return (
    <>
      <form 
        action="POST"
        onSubmit={handleSubmit(onSubmit)} 
        className={`w-full max-w-3xl h-fit rounded-lg shadow-lg p-5 ${themeMode === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}
      >
        <div className={`flex justify-center items-center w-full ${themeMode === 'light' ? 'bg-zinc-200' : 'bg-gray-700'} text-center rounded-lg`}>
          <MdSubscriptions size={24} className='text-tertiary'/>
          <h2 className='text-primary text-2xl font-bold sm:text-3xl my-3 ml-5'>Iscriviti alla newsletter!</h2>
        </div>
        <div className='flex flex-col sm:flex-row justify-around items-center gap-4 p-4 my-4'>        
            <label htmlFor="name">Inserisci il tuo nome</label>
            <Input 
              ref={inputRef}
              type="text"
              {...register("nome",
                {required:"il campo è obbligatorio",
                minLength: {value: 3,message:"nome utente non trovato"},
                maxLength:10  
                })}
              placeholder="inserisci il tuo nome"
              />
            {errors.nome && <p className='bg-red-100 text-red-500 text-xl p-2'>{errors.nome.message}</p>}
            <label htmlFor="email">Inserisci la tua email</label>
            <Input 
              type="email" 
              {...register("email",
                {required: "email obbligatoria",
                  minLength:3,
                  pattern:{
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Inserisci un'email valida"
                  }
                })}
                placeholder="inserisci la tua email"
              />
            {errors.email&& <p className='bg-red-100 text-red-500 text-xl p-2'>{errors.email.message}</p>}
        </div>
        <div className='flex flex-col justify-center gap-4 p-4'>
          <p className='mb-4'>Per proseguire devi accettare la nostra privacy</p>
          <div className='flex justify-center gap-3 mb-4'>
            <Input type="checkbox" {...register("privacy", {required:"devi accettare la privacy"})}/>
            <label>Accetta la nostra privacy</label>
          </div>
          <Button 
            type="submit"
            disabled={isSubmitting}
            onClick={()=>{
              triggerMessage();
              setFocus();
            }}
            >
            Iscriviti alla newsletter!
          </Button>
        </div>
        {visible && <p className='bg-red-100 text-red-500 text-xl p-2'>Newsletter inviata!</p>}
      </form>
    
     
    </>
  )
}

export default Form