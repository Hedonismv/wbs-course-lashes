import React from "react";
import style from './Footer.module.css';
import {HashLink} from "react-router-hash-link";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.footerContent}>
                    <div className={style.footerContentLeft}>
                        <p>ЮЛИЯ ВОРМАН</p>
                        <p>ИНН: 128294733</p>
                        <p>ОГРНИП: 37282329</p>
                    </div>
                    <div className={style.footerContentCenter}>
                        <HashLink smooth to="#">Наверх</HashLink>
                    </div>
                    <div className={style.footerContentRight}>
                        <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                        <p>ДОГОВОР-ОФЕРТА</p>
                        <p>СВЯЗАТЬСЯ С НАМИ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;