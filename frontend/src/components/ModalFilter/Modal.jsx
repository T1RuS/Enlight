import React, {useContext} from 'react';
import {ThemeContext} from "../../context/ThemeContext";

import cl from "./Modal.module.css"

import classes from "classnames";
import FilterElem from "../UI/Filter/FilterElem";


const Modal = ({modal, className, active, setActive}) => {

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
                        <FilterElem id="DNS" onClick={(e) => toggleActive(e)}
                                    active={active.indexOf("DNS") !== -1}/>

                        <FilterElem id="Wildberries" onClick={(e) => toggleActive(e)}
                                    active={active.indexOf("Wildberries") !== -1}/>

                        <FilterElem id="Ozon" onClick={(e) => toggleActive(e)}
                                    active={active.indexOf("Ozon") !== -1}/>

                        <FilterElem id="Citylink" onClick={(e) => toggleActive(e)}
                                    active={active.indexOf("Citylink") !== -1}/>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Modal;