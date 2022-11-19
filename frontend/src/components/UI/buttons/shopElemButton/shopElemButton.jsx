import React, {useContext} from 'react';
import {ThemeContext} from "../../../../context/ThemeContext";

import cl from "./shopElemButton.module.css"

import classes from "classnames";



const ShopElemButton = ({id, active, onClick}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <div data-theme={theme}
             className={active ? classes(cl.elem, cl.active) : cl.elem}
             onClick={onClick}
             style={theme === "dark" ? {border: "none"} : null}
             id={id}>

            <h1>{id}</h1>
        </div>
    );
};

export default ShopElemButton;