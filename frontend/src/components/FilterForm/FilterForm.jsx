import React, {useState} from 'react';
import cl from "./FilterForm.module.css"

import BorderedInput from "../UI/BorderedInuput/BorderedInput";
import RoundButton from "../UI/RoundButton/RoundButton";
import Modal from "../ModalFilter/Modal";

import classes from "classnames";
import {shops} from "../../shops/shops";


const FilterForm = ({modal, setModal}) => {

    const [inputText, setInputText] = useState('')
    const [price1, setPrice1] = useState('')
    const [price2, setPrice2] = useState('')
    const [currentSort, setCurrentSort] = useState("По возрастанию цены")

    const [activeShops, setActiveShops] = useState(shops.slice(0))

    const submit = (e) => {
        e.preventDefault();


    }

    return (
        <form onSubmit={(e) => submit(e)} className={cl.wrapper}>

            <div className={cl.inputArea}>
                <BorderedInput value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                <RoundButton className={modal ? cl.hide : null}
                             type={"button"}
                             onClick={() => setModal(true)}>
                    Что ищем?
                </RoundButton>
            </div>

            <Modal className={modal ? classes(cl.modal, cl.activeModal) : cl.modal}
                   modal={modal}
                   active={activeShops} setActive={setActiveShops}
                   price2={price2} onChange2={(e) => setPrice2(e.target.value)}
                   price1={price1} onChange1={(e) => setPrice1(e.target.value)}
                   priceError={parseInt(price1) > parseInt(price2)} shopsError={activeShops.length === 0}
                   currentSort={currentSort} setCurrentSort={setCurrentSort}/>

            <button type={"submit"} style={{display: "none"}} disabled={parseInt(price1) > parseInt(price2)}/>
        </form>
    );
};

export default FilterForm;