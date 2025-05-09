import { useRef } from "react";

export function useFocus(){

    //the ref's value is initially null because there's no DOM element attached
    const inputRef = useRef(null);

    const setFocus = () =>{
        //when the function is called, it tries to focus the input field
        inputRef.current?.focus();

    }

    return [inputRef, setFocus];
}