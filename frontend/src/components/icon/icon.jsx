import React from 'react';
import classes from "classnames";

const Icon = ({children, onClick, className}) => {
    return (
        <span onClick={onClick} className={classes(className, 'material-symbols-outlined')}>
            {children}
        </span>
    );
};

export default Icon;