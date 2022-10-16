import React, {useContext} from 'react';
import {ThemeContext} from "../../../context/ThemeContext";

import cl from "./ThemeSwitcher.module.css"

import Icon from "../../Icon/icon";
import classes from "classnames";


const ThemeSwitcher = ({className}) => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={classes(cl.switcher, className)}
             onMouseDown={(e) => {
                 e.stopPropagation();
             }}>

            <div style={theme === "dark" ? {transform: "rotate(180deg"} : null} className={cl.round}>

                <div className={cl.moon} onClick={toggleTheme}>
                    <Icon>dark_mode</Icon>
                </div>

                <div className={cl.sun} onClick={toggleTheme}>
                    <Icon>light_mode</Icon>
                </div>

            </div>
        </div>
    );
};

export default ThemeSwitcher;