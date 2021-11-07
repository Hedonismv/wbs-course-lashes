import React from "react";
import {HashLink} from "react-router-hash-link";
import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={style.navbar}>
            <span>ИНТЕНСИВ<br/>ЮЛИИ ВОРМАН</span>
            <div className={style.navbarLink}>
                <HashLink smooth to={'#about'}>Для Кого?</HashLink>
                <HashLink smooth to={'#person'}>Что будет на интенсиве?</HashLink>
                <HashLink smooth to={'#person'}>О Юлии</HashLink>
                <HashLink smooth to={'#rate'}>Тарифы</HashLink>
            </div>
        </div>
    )
}

export default NavBar;