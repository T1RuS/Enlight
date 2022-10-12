import BorderedInput from "./components/UI/BorderedInuput/BorderedInput";
import RoundButton from "./components/UI/RoundButton/RoundButton";

import {ThemeContext} from "./context/ThemeContext";
import {toggleTheme} from "./utility/toggleTheme";

import {useEffect} from "react";

import "./app.css"



function App() {
    useEffect(() => {
        // Проверить наличие темы в local storage и установить её
        let storedTheme = localStorage.getItem('theme') ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
    }, [])

    return (
        <ThemeContext.Provider value={toggleTheme}>
            <div className="wrapper">
                <BorderedInput/>
                <RoundButton onClick={toggleTheme}>Toggle Theme</RoundButton>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
