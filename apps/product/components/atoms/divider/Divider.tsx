import React from 'react';
import clsN from "classnames";
import styles from './styles/Divider.module.scss';

interface DividerProps{

}

export const Divider = () => {
    return(
        <div className={clsN(styles['divider'])}/>
    )
}