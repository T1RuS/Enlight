import logo from "./img/logoText.png";
import logoBlack from "./img/logoBlack.png";

import {ThemeContext} from "./context/ThemeContext";
import {useEffect, useState} from "react";

import "./app.css";
import "./global.css";
import FilterForm from "./components/FilterForm/FilterForm";
import ShopItem from "./components/shopItem/shopItem";


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
                <div className="mainArea">
                    <ShopItem
                        itemImg={"https://free-png.ru/wp-content/uploads/2022/09/free-png.ru-121.png"}
                        shop={"DNS"} price={"125 999"}
                        name={"                    6.7\" Смартфон Apple iPhone 14 Pro Max 256 ГБ фиолетовый [6, 1 SIM, OLED, 2796х1290, камера 48+12+12\n" +
                            "                    Мп, NFC, 5G, GPS]"}/>

                    <ShopItem itemImg={"https://uberdeal.ru/wp-content/uploads/2022/07/Honor-X7.png"}
                              shop={"CITYLINK"} price={"16 999"}
                    name={"6.74\" Смартфон Honor X7 128 ГБ серебристый [8x(2.4 ГГц), 4 Гб, 2 SIM, IPS, 1600x720, камера 48+5+2+2 Мп, NFC, 4G, GPS, 5000 мА*ч]"}/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
