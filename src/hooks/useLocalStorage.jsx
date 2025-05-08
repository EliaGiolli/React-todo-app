import { useEffect } from "react";

export function useLocalStorage({watch,reset,key="myFormData"}){
        
    useEffect(()=>{
        const savedData = localStorage.getItem(key);
        if(savedData){
        try{
            reset(JSON.parse(savedData));
        }catch(err){
            console.error("errore nel parsing dei dati sul local storage");
        }
        }
    },[reset,key]);
    
    const watchChangedFields = watch();

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(watchChangedFields));
    },[watchChangedFields,key]);

}