import React, {useContext, useRef} from 'react';
import Icon from "../../icon/icon";


import cl from "./BorderedInput.module.css";
import {ThemeContext} from "../../../context/ThemeContext";



const BorderedInput = () => {
    const {theme} = useContext(ThemeContext)

    const inputRef = useRef(null)

    return (
        <div className={cl.wrapper}>
            <input style={theme === "light" ? {border: "1px solid black"} : null} ref={inputRef} placeholder={"Найти"}/>
            <Icon className={cl.icon} onClick={() => inputRef.current.focus()}>search</Icon>
            {theme !== "light" &&
                <div className={cl.rainbowGlow}/>
            }
        </div>
    );
};

export default BorderedInput;