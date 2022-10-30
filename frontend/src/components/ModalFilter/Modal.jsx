import React, {useContext, useState} from 'react';
import {ThemeContext} from "../../context/ThemeContext";

import cl from "./Modal.module.css"

import classes from "classnames";
import FilterElem from "../UI/Filter/FilterElem";
import {shops} from "../../shops/shops";
import Icon from "../Icon/icon";


const Modal = ({modal, className, active,
                   setActive, price1, onChange1,
                   price2, onChange2, priceError,
                   shopsError, currentSort, setCurrentSort}) => {

    const {theme} = useContext(ThemeContext);
    const [sortChoose, setSortChoose] = useState(true)

    const toggleActive = (e) => {
        let shop = e.target.id;

        if (active.indexOf(shop) !== -1) {
            setActive(active.filter(elem => elem !== shop))
        } else {
            setActive([...active, shop])
        }
    }

    const chooseSort = (e) => {
        let sort = e.target.textContent;

        setCurrentSort(sort);
        setSortChoose(false);
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
                    <span data-error={shopsError} className={cl.error}>А где искать?</span>
                </div>

                <div className={cl.priceArea}>
                    <h1 data-theme={theme}>Цена:</h1>
                    <hr data-theme={theme}/>

                    <div className={cl.priceInputs}>
                        <div className={cl.glow} data-theme={theme}>
                            <input value={price1} onChange={onChange1} type="number" data-theme={theme}
                                   placeholder={"От"}/>
                        </div>
                        <div className={cl.glow} data-theme={theme}>
                            <input value={price2} onChange={onChange2} type="number" data-theme={theme}
                                   placeholder={"До"}/>
                        </div>
                    </div>
                    <div data-error={priceError} className={cl.error}>Кажется что-то не так с ценой!</div>

                    <div className={cl.sortArea}>
                        <h1 data-theme={theme}>Сортировать по:</h1>
                        <hr data-theme={theme}/>
                        <div className={cl.dropDownWrapper}>
                            <div className={cl.currentSort}
                                 data-theme={theme} data-text={currentSort}
                                 onClick={() => setSortChoose(!sortChoose)}>
                                <Icon>expand_more</Icon>
                            </div>
                            <div className={sortChoose ? classes(cl.sortsActive, cl.sorts) : cl.sorts}>
                                <div className={currentSort === "По возрастанию цены" ? classes(cl.sort, cl.activeSort) : cl.sort}
                                     data-theme={theme}
                                     onClick={(e) => chooseSort(e)}>По возрастанию цены</div>
                                <div className={currentSort === "По убыванию цены" ? classes(cl.sort, cl.activeSort) : cl.sort}
                                     data-theme={theme}
                                     onClick={(e) => chooseSort(e)}>По убыванию цены</div>
                                <div className={currentSort === "По кол-ву отзывов" ? classes(cl.sort, cl.activeSort) : cl.sort}
                                     data-theme={theme}
                                     onClick={(e) => chooseSort(e)}>По кол-ву отзывов</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;