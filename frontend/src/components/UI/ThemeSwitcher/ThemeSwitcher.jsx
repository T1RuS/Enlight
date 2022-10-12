import React, {useContext} from 'react';
import {ThemeContext} from "../../../context/ThemeContext";

import Icon from "../../icon/icon";

import cl from "./ThemeSwitcher.module.css"


const ThemeSwitcher = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={cl.switcher}>
            <div style={theme === "light" ? {transform: "rotate(180deg"} : null} className={cl.round}>
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