import React, {useContext} from 'react';
import {ThemeContext} from "../../../../context/ThemeContext";

import classes from "classnames"

import cl from "./RoundButton.module.css"



const RoundButton = ({children, onClick, className, type}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={cl.wrapper}>
            <button onClick={onClick}
                    className={theme === "light" ? classes(cl.button, className, cl.light) : classes(cl.button, className, cl.dark)}
                    type={type}>

                <p className={theme === "light" ? null : cl.darkText}>
                {children}
                </p>

            </button>

            {theme === "dark" &&
                <div className={classes(cl.glow, className)}/>
            }
        </div>
    );
};

export default RoundButton;