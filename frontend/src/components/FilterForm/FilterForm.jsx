import React, {useState} from 'react';
import cl from "./FilterForm.module.css"

import BorderedInput from "../UI/BorderedInuput/BorderedInput";
import RoundButton from "../UI/RoundButton/RoundButton";
import Modal from "../ModalFilter/Modal";

import classes from "classnames";


const FilterForm = ({modal, setModal}) => {

    const [inputText, setInputText] = useState('')
    const [active, setActive] = useState([])

    const submit = (e) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={(e) => submit(e)} className={cl.wrapper}>

            <div className={cl.inputArea}>
                <BorderedInput value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                <RoundButton className={modal ? cl.hide : null}
                             type={"submit"}
                             onClick={() => setModal(true)}>
                    Что ищем?
                </RoundButton>
            </div>

            <Modal className={modal ? classes(cl.modal, cl.activeModal) : cl.modal}
                   modal={modal}
                   active={active}
                   setActive={setActive}/>
        </form>
    );
};

export default FilterForm;