import React, {useRef} from 'react';
import Icon from "../../icon/icon";


import cl from "./BorderedInput.module.css";



const BorderedInput = () => {

    const inputRef = useRef(null)

    return (
        <div className={cl.wrapper}>
            <input ref={inputRef} placeholder={"Search"}/>
            <Icon className={cl.icon} onClick={() => inputRef.current.focus()}>search</Icon>
        </div>
    );
};

export default BorderedInput;