import React, {useContext} from 'react';
import {ThemeContext} from "../../context/ThemeContext";

import cl from "./Modal.module.css"

import classes from "classnames";
import FilterElem from "../UI/Filter/FilterElem";
import {shops} from "../../shops/shops";


const Modal = ({modal, className, active, setActive, price1, onChange1, price2, onChange2, error}) => {

    const {theme} = useContext(ThemeContext);

    const toggleActive = (e) => {
        let shop = e.target.id;

        if (active.indexOf(shop) !== -1) {
            setActive(active.filter(elem => elem !== shop))
        } else {
            setActive([...active, shop])
        }
    }

    return (
        <div className={modal ? classes(cl.window, cl.active, className) : classes(cl.window, className)}
             onMouseDown={(e) => e.stopPropagation()}>

            <div className={cl.content}>
                <div className={cl.shopsArea}>
                    <h1 data-theme={theme}>Магазины:</h1>
                    <hr data-theme={theme}/>
                    <div>
                        {
                            shops.map(shop =>
                                <FilterElem key={shop} id={shop} onClick={(e) => toggleActive(e)}
                                            active={active.indexOf(shop) !== -1}/>
                            )
                        }
                    </div>
                </div>

                <div className={cl.priceArea}>
                    <h1 data-theme={theme}>Цена:</h1>
                    <hr data-theme={theme}/>

                    <div className={cl.priceInputs}>
                        <div className={cl.glow} data-theme={theme}>
                            <input value={price1} onChange={onChange1} type="number" data-theme={theme} placeholder={"От"}/>
                        </div>
                        <div className={cl.glow} data-theme={theme}>
                            <input value={price2} onChange={onChange2} type="number" data-theme={theme} placeholder={"До"}/>
                        </div>
                    </div>
                    <div data-error={error} className={cl.error}>Стартовая цена не может быть больше максимальной цены!</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;