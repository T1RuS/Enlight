import React, {useContext, useEffect, useState} from 'react';
import cl from "./shopItem.module.css";
import Icon from "../Icon/icon";
import classes from "classnames";
import {ThemeContext} from "../../context/ThemeContext";


const ShopItem = ({itemImg, shop, price, name}) => {
    const [color, setColor] = useState("transparent")

    useEffect(() => {
        const shops = [
            {name: "DNS", color: "#fa8407"},
            {name: "OZON", color: "#375bd5"},
            {name: "WILDBERRIES", color: "var(--linear-grad)"},
            {name: "CITYLINK", color: "orange"}
        ]

        try {
            setColor(shops.filter(shopItem => shopItem.name === shop)[0].color)
        } catch (err) {

        }
    }, [shop])

    const {theme} = useContext(ThemeContext)

    return (
        <div className={cl.wrapper}>
            <img src={itemImg} alt="item img" draggable={false}/>

            <div className={cl.descriptionArea}>
                <div className={cl.itemName}>
                    {name}
                </div>

                <div className={cl.moreInfo}>
                    <div>
                        <div className={cl.borderBtn}>
                            <label className={cl.container}>
                                <p>Сравнить</p>
                                <input type="checkbox"/>
                                <span className={cl.checkmark}/>
                            </label>
                        </div>

                        <div className={cl.borderBtn}>
                            <div>
                                <Icon>star</Icon>
                                <Icon>star</Icon>
                                <Icon>star</Icon>
                                <Icon>star</Icon>
                                <Icon>star_half</Icon>
                            </div>
                            4.5
                        </div>
                    </div>
                </div>

                <div className={cl.deliveryArea}>
                    <div>
                        <p>Наличие: </p>
                        <span>В наличии</span>
                    </div>
                    <div>
                        <p>Доставка: </p>
                        <span>Имеется</span>
                    </div>
                </div>
            </div>

            <div className={cl.priceArea}>
                <div className={cl.price} data-theme={theme}>
                    {price} ₽
                </div>

                <div className={cl.btns}>
                    <div className={classes(cl.btn, cl.favorite)}>
                        <Icon>favorite</Icon>
                    </div>

                    <div className={classes(cl.btn, cl.buy)}>
                        Купить
                    </div>
                </div>

                <div className={cl.shop} style={theme === "dark" ? {background: color} : {border: `1px solid ${color}`, color: color}}>
                    {shop}
                </div>
            </div>
        </div>
    );
};

export default ShopItem;