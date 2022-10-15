import logo from "./img/logoText.png";
import logoBlack from "./img/logoBlack.png";

import {ThemeContext} from "./context/ThemeContext";
import {useEffect, useState} from "react";

import "./app.css";
import "./global.css";
import FilterForm from "./components/FilterForm/FilterForm";



function App() {
    const [theme, setTheme] = useState("light")
    const [modal, setModal] = useState(false)

    useEffect(() => {
        // Проверить наличие темы в local storage и установить её
        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme)
            setTheme(storedTheme)
        }
    }, [])

    const toggleTheme = () => {
        // Взять тему из html тега и поменять её
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";

        if (currentTheme === "light") {
            targetTheme = "dark";
        }

        // Замена темы в html Теге
        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
        setTheme(targetTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="wrapper" onMouseDown={() => setModal(false)}>
                <img draggable={false} className="logo" src={theme === "light" ? logoBlack : logo} alt="logo"/>
                <FilterForm modal={modal} setModal={setModal}/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
