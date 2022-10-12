import React from 'react';
import classes from "classnames"


import cl from "./RoundButton.module.css"



const RoundButton = ({children, onClick, className}) => {
    return (
        <button onClick={onClick} className={classes(cl.button, className)}>
            {children}
        </button>
    );
};

export default RoundButton;