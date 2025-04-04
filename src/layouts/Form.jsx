import React,{useEffect,useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

//REACT ICONS
import { MdSubscriptions } from "react-icons/md";

//THEME
import { useTheme } from '../contexts/ThemeContext';

//EXTERNAL LIBRARIES
import { useForm } from 'react-hook-form';
const LOCAL_STORAGE_KEY = "myFormData";

function Form() {
  //cambio tema
  const {themeMode} = useTheme();

  //stato del messaggio 
  const [showMessage, setShowMessage] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
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
  //LOCAL STORAGE 
  useEffect(()=>{
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(savedData){
      try{
        reset(JSON.parse(savedData));
      }catch(err){
        console.error("errore nel parsing dei dati sul local storage");
      }
    }
  },[reset]);
  
  const watchChangedFields = watch();

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(watchChangedFields));
  },[watchChangedFields]);

  
  const onSubmit = (data)=>{
    console.log("dati inviati",data);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  return (
    <>
      <form 
        action="POST"
        onSubmit={handleSubmit(onSubmit)} 
        className={`w-full max-w-3xl h-fit rounded-lg shadow-lg p-5 ${themeMode === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
      >
        <div className={`flex justify-center items-center w-full ${themeMode === 'light' ? 'bg-primary' : 'bg-gray-700'} text-center rounded-lg`}>
          <MdSubscriptions size={24} className='text-tertiary'/>
          <h2 className='text-primary text-2xl font-bold sm:text-3xl my-3 ml-5'>Iscriviti alla newsletter!</h2>
        </div>
        <div className='flex flex-col sm:flex-row justify-around items-center gap-4 p-4 my-4'>        
            <label htmlFor="name">Inserisci il tuo nome</label>
            <Input 
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
            onClick={handleShowMessage}
            >
            Iscriviti alla newsletter!
          </Button>
        </div>
        {showMessage && <p className='bg-red-100 text-red-500 text-xl p-2'>Newsletter inviata!</p>}
      </form>
    
     
    </>
  )
}

export default Form