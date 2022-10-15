import React, {useContext, useRef} from 'react';


import cl from "./BorderedInput.module.css";
import {ThemeContext} from "../../../context/ThemeContext";
import Icon from "../../Icon/Icon";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";


const BorderedInput = ({value, onChange}) => {
    const {theme} = useContext(ThemeContext)

    const inputRef = useRef(null)

    return (
        <div className={cl.wrapper}>
            <input style={theme === "light" ? {border: "1px solid black"} : null}
                   ref={inputRef}
                   placeholder={"Найти"}
            value={value}
            onChange={onChange}
            onMouseDown={(e) => e.stopPropagation()}/>

            <ThemeSwitcher className={cl.switcher}/>

            <Icon className={cl.icon} onClick={() => inputRef.current.focus()}>search</Icon>
            {theme !== "light" &&
                <div className={cl.rainbowGlow}/>
            }
        </div>
    );
};

export default BorderedInput;